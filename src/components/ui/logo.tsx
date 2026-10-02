import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isLink?: boolean;
}

export function Logo({ className, isLink = true }: LogoProps) {
  const content = (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <svg
        viewBox="0 0 320 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-auto max-w-[210px] sm:max-w-[240px]"
        aria-label="Logo TOP-COMPTA.FR"
      >
        <rect x="2" y="6" width="48" height="48" rx="12" fill="url(#brandGrad)" />
        <path
          d="M16 38V22H24C27.3 22 29.5 24 29.5 27C29.5 30 27.3 32 24 32H20V38H16Z"
          fill="#FFFFFF"
        />
        <path d="M28 20L38 30L34 34L28 28V20Z" fill="#FCD34D" />
        <path
          d="M22 36L32 26L36 30L26 40H22V36Z"
          fill="#F59E0B"
          opacity="0.9"
        />
        <text
          x="60"
          y="38"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="26"
          fontWeight="800"
          fill="#0F172A"
          letterSpacing="-0.5px"
        >
          TOP<tspan fill="#D97706">.</tspan>
          <tspan fill="#2563EB">COMPTA</tspan>
        </text>
        <text
          x="61"
          y="49"
          fontFamily="var(--font-plus-jakarta), sans-serif"
          fontSize="9"
          fontWeight="600"
          fill="#64748B"
          letterSpacing="1.5px"
        >
          EXTERNALISATION &amp; CONSEIL
        </text>
        <defs>
          <linearGradient
            id="brandGrad"
            x1="2"
            y1="6"
            x2="50"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1E3A8A" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  if (isLink) {
    return (
      <Link href="/" aria-label="Retour à l'accueil TOP-COMPTA">
        {content}
      </Link>
    );
  }

  return content;
}
