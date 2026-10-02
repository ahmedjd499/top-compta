"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
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
          const isActive = item.isActive;

          const content = (
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={cn(
                "relative flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors",
                isActive
                  ? "text-secondary font-bold"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileNavPill"
                  className="absolute -top-1 w-8 h-1 rounded-full bg-secondary"
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                />
              )}
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </motion.div>
          );

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("tel:") ? undefined : "_blank"}
                rel={item.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href}>
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
