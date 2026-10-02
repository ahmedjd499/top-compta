"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Receipt, FolderLock, FileEdit, PhoneCall } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNavBar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Accueil",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Offres",
      href: "/offres",
      icon: Receipt,
      isActive: pathname.startsWith("/offres"),
    },
    {
      label: "GED",
      href: siteConfig.clientPortalUrl,
      icon: FolderLock,
      isExternal: true,
    },
    {
      label: "Devis",
      href: "/#contact",
      icon: FileEdit,
      isActive: false,
    },
    {
      label: "Contact",
      href: siteConfig.phoneHref,
      icon: PhoneCall,
      isExternal: true,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom,0px)]"
      aria-label="Navigation mobile rapide"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const className = cn(
            "flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors",
            item.isActive
              ? "text-secondary font-bold"
              : "text-on-surface-variant hover:text-on-surface"
          );

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("tel:") ? undefined : "_blank"}
                rel={item.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                className={className}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[11px] font-medium">{item.label}</span>
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} className={className}>
              <Icon className="w-5 h-5" />
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
