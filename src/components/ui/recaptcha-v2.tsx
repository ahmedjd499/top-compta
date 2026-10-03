"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

export interface ReCaptchaV2Ref {
  reset: () => void;
}

interface ReCaptchaV2Props {
  onChange: (token: string | null) => void;
  siteKey?: string;
  theme?: "light" | "dark";
  className?: string;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
          size?: "normal" | "compact";
        }
      ) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    onRecaptchaLoaded?: () => void;
  }
}

// Google official test key (safe fallback in dev when no custom key is provided)
const DEFAULT_TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export const ReCaptchaV2 = forwardRef<ReCaptchaV2Ref, ReCaptchaV2Props>(
  function ReCaptchaV2({ onChange, siteKey, theme = "light", className }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);
    const onChangeRef = useRef(onChange);
    onChangeRef.current = onChange;

    const resolvedSiteKey =
      siteKey ||
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
      DEFAULT_TEST_SITE_KEY;

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (
          typeof window !== "undefined" &&
          window.grecaptcha &&
          widgetIdRef.current !== null
        ) {
          try {
            window.grecaptcha.reset(widgetIdRef.current);
          } catch (e) {
            console.error("Erreur lors de la réinitialisation du reCAPTCHA:", e);
          }
        }
        onChangeRef.current(null);
      },
    }));

    useEffect(() => {
      let isMounted = true;

      const renderWidget = () => {
        if (
          !isMounted ||
          !containerRef.current ||
          !window.grecaptcha?.render ||
          widgetIdRef.current !== null
        ) {
          return;
        }

        try {
          // Clear container and create a fresh child element
          // This prevents "reCAPTCHA has already been rendered in this element" in React 18/19 StrictMode / Fast Refresh
          containerRef.current.innerHTML = "";
          const targetEl = document.createElement("div");
          containerRef.current.appendChild(targetEl);

          const id = window.grecaptcha.render(targetEl, {
            sitekey: resolvedSiteKey,
            theme,
            callback: (token: string) => {
              if (isMounted) onChangeRef.current(token);
            },
            "expired-callback": () => {
              if (isMounted) onChangeRef.current(null);
            },
            "error-callback": () => {
              if (isMounted) onChangeRef.current(null);
            },
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.error("Erreur rendu reCAPTCHA:", err);
        }
      };

      if (typeof window === "undefined") return;

      if (window.grecaptcha?.render) {
        renderWidget();
      } else {
        const existingScript = document.getElementById("google-recaptcha-script");
        if (!existingScript) {
          window.onRecaptchaLoaded = () => {
            if (isMounted) renderWidget();
          };

          const script = document.createElement("script");
          script.id = "google-recaptcha-script";
          script.src =
            "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit&hl=fr";
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        } else {
          // Script tag exists; attach to existing callback or poll
          const prevOnload = window.onRecaptchaLoaded;
          window.onRecaptchaLoaded = () => {
            if (prevOnload) prevOnload();
            if (isMounted) renderWidget();
          };

          const interval = setInterval(() => {
            if (window.grecaptcha?.render) {
              clearInterval(interval);
              if (isMounted) renderWidget();
            }
          }, 150);

          return () => clearInterval(interval);
        }
      }

      return () => {
        isMounted = false;
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        widgetIdRef.current = null;
      };
    }, [resolvedSiteKey, theme]);

    return (
      <div className={className}>
        <div ref={containerRef} className="min-h-[78px] flex items-center" />
      </div>
    );
  }
);
