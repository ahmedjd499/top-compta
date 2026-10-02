"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Star,
  Lock,
  Menu,
  X,
  ChevronDown,
  AlertTriangle,
  FileText,
  User,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { siteConfig, topBannerContent, headerContactInfo, mainNavItems } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offersDropdownOpen, setOffersDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface/95 backdrop-blur-xl shadow-md border-b border-outline-variant/30"
            : "bg-surface"
        )}
      >
        {/* Tier 1: Urgency Legal Banner */}
        <div className="bg-primary-container text-on-primary text-xs py-2 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-tertiary-fixed shrink-0" />
              <span className="font-semibold text-tertiary-fixed uppercase tracking-wider text-[11px]">
                {topBannerContent.tag}
              </span>
              <span className="line-clamp-1">{topBannerContent.message}</span>
            </div>
            <Link
              href={topBannerContent.linkHref}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-tertiary-fixed hover:text-on-primary transition-colors underline underline-offset-2 shrink-0"
            >
              {topBannerContent.linkText}
            </Link>
          </div>
        </div>

        {/* Tier 2: Utility Strip (Desktop/Tablet) */}
        <div className="bg-surface-container-low text-on-surface-variant text-xs py-1.5 px-4 sm:px-6 hidden sm:block border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-1.5 font-bold text-on-surface hover:text-secondary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>{headerContactInfo.phone}</span>
              </a>
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center gap-1.5 hover:text-on-surface transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{headerContactInfo.email}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>{headerContactInfo.schedule}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.trustpilotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-on-surface font-semibold hover:text-secondary transition-colors"
              >
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>{headerContactInfo.trustpilotScore}</span>
              </a>
              <span className="text-outline-variant">|</span>
              <span className="text-on-surface-variant font-medium">
                {headerContactInfo.certifications}
              </span>
            </div>
          </div>
        </div>

        {/* Tier 3: Main Executive Navbar */}
        <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Menu principal">
              {/* Dropdown: Notre Offre */}
              <div
                className="relative"
                onMouseEnter={() => setOffersDropdownOpen(true)}
                onMouseLeave={() => setOffersDropdownOpen(false)}
              >
                <Link
                  href="/offres"
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-semibold py-2 transition-colors",
                    pathname.startsWith("/offres")
                      ? "text-secondary font-bold underline underline-offset-8"
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  <span>Notre Offre</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      offersDropdownOpen && "rotate-180"
                    )}
                  />
                </Link>

                {offersDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 z-50 w-72 animate-in fade-in duration-150">
                    <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 p-2 flex flex-col gap-1">
                      {mainNavItems[0].dropdown?.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors flex items-center justify-between"
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                      <div className="h-px bg-surface-container my-1" />
                      <Link
                        href="/#offres"
                        className="px-3 py-2 rounded-lg text-xs font-bold text-secondary hover:bg-secondary/10 transition-colors"
                      >
                        Comparez nos formules →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/notre-adn"
                className={cn(
                  "text-sm font-semibold transition-colors",
                  pathname === "/notre-adn"
                    ? "text-secondary font-bold underline underline-offset-8"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                Notre ADN
              </Link>
              <Link
                href="/externalisation_page"
                className={cn(
                  "text-sm font-semibold transition-colors",
                  pathname === "/externalisation_page"
                    ? "text-secondary font-bold underline underline-offset-8"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                L&apos;externalisation comptable
              </Link>
              <Link
                href="/mentions-legales#cgv"
                className={cn(
                  "text-sm font-semibold transition-colors",
                  pathname === "/mentions-legales"
                    ? "text-secondary font-bold underline underline-offset-8"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                CGV
              </Link>
            </nav>
          </div>

          {/* Right Action Anchors */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={siteConfig.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-semibold shadow-sm transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-secondary" />
              <span>Espace Client</span>
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container text-xs sm:text-sm font-bold shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Demander un devis</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* User icon indicator */}
            <a
              href={siteConfig.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-8 h-8 rounded-full bg-primary-sovereign items-center justify-center text-on-primary hover:opacity-90 transition-opacity"
              aria-label="Connexion GED"
            >
              <User className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-5/6 max-w-sm bg-surface shadow-2xl transition-transform duration-300 ease-in-out flex flex-col lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-outline-variant/20">
          <Logo isLink={false} />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface cursor-pointer"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
              pathname === "/"
                ? "bg-surface-container text-secondary font-bold"
                : "text-on-surface hover:bg-surface-container-low"
            )}
          >
            Accueil
          </Link>
          <Link
            href="/offres"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
              pathname.startsWith("/offres")
                ? "bg-surface-container text-secondary font-bold"
                : "text-on-surface hover:bg-surface-container-low"
            )}
          >
            Notre Offre (Formules &amp; Tarifs)
          </Link>
          <Link
            href="/notre-adn"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
              pathname === "/notre-adn"
                ? "bg-surface-container text-secondary font-bold"
                : "text-on-surface hover:bg-surface-container-low"
            )}
          >
            Notre ADN
          </Link>
          <Link
            href="/externalisation_page"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
              pathname === "/externalisation_page"
                ? "bg-surface-container text-secondary font-bold"
                : "text-on-surface hover:bg-surface-container-low"
            )}
          >
            L&apos;externalisation comptable
          </Link>
          <a
            href={siteConfig.clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-on-surface hover:bg-surface-container-low transition-colors"
          >
            <Lock className="w-4 h-4 text-secondary" />
            <span>Espace Client GED (MyCompanyFiles)</span>
          </a>

          <div className="pt-4 mt-4 bg-surface-container-low rounded-xl p-4 flex flex-col gap-2.5">
            <span className="text-xs uppercase font-bold text-on-surface-variant tracking-wider">
              Accompagnement Express
            </span>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-11 rounded-lg bg-secondary text-on-secondary flex items-center justify-center gap-2 font-bold text-sm shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Devis Gratuit Express</span>
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="w-full h-11 rounded-lg bg-surface-container text-on-surface flex items-center justify-center gap-2 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </nav>

        <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/20">
          <p className="text-xs font-bold text-on-surface">Cabinet Conseil &amp; Gestion</p>
          <p className="text-xs text-on-surface-variant">France entière • Depuis 2011</p>
        </div>
      </aside>
    </>
  );
}
