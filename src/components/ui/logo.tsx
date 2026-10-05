import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isLink?: boolean;

}

export function Logo({ className, isLink = true}: LogoProps) {
  const content = (
    <div className={cn("flex items-center select-none", className)}>
      <Image
        src="/assets/logo.png"
        alt="TOP-COMPTA"
        width={230}
        height={41}
        priority
        className="h-9 sm:h-10 w-auto object-contain transition-transform"
      />
    </div>
  );

  if (isLink) {
    return (
      <Link href="/" aria-label="Retour à l'accueil TOP-COMPTA" className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
