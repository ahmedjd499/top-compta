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
        onChange(null);
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
          // Clear any children before rendering to avoid duplicates
          containerRef.current.innerHTML = "";
          const id = window.grecaptcha.render(containerRef.current, {
            sitekey: resolvedSiteKey,
            theme,
            callback: (token: string) => {
              if (isMounted) onChange(token);
            },
            "expired-callback": () => {
              if (isMounted) onChange(null);
            },
            "error-callback": () => {
              if (isMounted) onChange(null);
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
          // Script already loading, attach to global or poll
          const prevOnload = window.onRecaptchaLoaded;
          window.onRecaptchaLoaded = () => {
            if (prevOnload) prevOnload();
            if (isMounted) renderWidget();
          };
          // Also set a fallback timer if it loaded before the hook attached
          const interval = setInterval(() => {
            if (window.grecaptcha?.render) {
              clearInterval(interval);
              if (isMounted) renderWidget();
            }
          }, 200);

          return () => clearInterval(interval);
        }
      }

      return () => {
        isMounted = false;
        widgetIdRef.current = null;
      };
    }, [resolvedSiteKey, theme, onChange]);

    return (
      <div className={className}>
        <div ref={containerRef} className="min-h-[78px] flex items-center" />
      </div>
    );
  }
);
