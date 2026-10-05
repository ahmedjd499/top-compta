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
  const [mobileOffersOpen, setMobileOffersOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Tier 1 & Tier 2: Scrollable Top Bars (scroll with document flow) */}
      <div className="w-full relative z-40">
        {/* Tier 1: Urgency Legal Banner (Jaune) */}
        <div className="bg-jaune-vif text-[#0b1c30] text-xs py-2 px-4 sm:px-6 border-b border-jaune-moutarde/20 shadow-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#b45309] shrink-0" />
              <span className="font-extrabold text-[#b45309] uppercase tracking-wider text-xs">
                {topBannerContent.tag}
              </span>
              <span className="line-clamp-1 font-medium text-[#0b1c30]">{topBannerContent.message}</span>
            </div>
            <Link
              href={topBannerContent.linkHref}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0b1c30] hover:text-[#b45309] transition-colors underline underline-offset-2 shrink-0"
            >
              {topBannerContent.linkText}
            </Link>
          </div>
        </div>

        {/* Tier 2: Utility Strip (Bleu) */}
        <div className="bg-bleu text-white text-xs py-1.5 px-4 sm:px-6 hidden sm:block border-b border-bleu-hover/40 shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-jaune-vif transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-jaune-vif" />
                <span>{headerContactInfo.phone}</span>
              </a>
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-white/80" />
                <span>{headerContactInfo.email}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-white/85">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{headerContactInfo.schedule}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.trustpilotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white font-semibold hover:text-jaune-vif transition-colors"
              >
                <div className="flex items-center text-jaune-vif">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <div className="relative w-3.5 h-3.5">
                    {/* Background unfilled star */}
                    <Star className="w-3.5 h-3.5 text-white/30 fill-white/20" />
                    {/* 60% filled overlay star for 4.6/5 rating */}
                    <div className="absolute inset-0 w-[60%] overflow-hidden">
                      <Star className="w-3.5 h-3.5 fill-current text-jaune-vif min-w-[14px]" />
                    </div>
                  </div>
                </div>
                <span>{headerContactInfo.trustpilotScore}</span>
              </a>
              <span className="text-white/30">|</span>
              <span className="text-white/85 font-medium">
                {headerContactInfo.certifications}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Executive Navbar (Sticky) */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-surface/95 backdrop-blur-xl shadow-md border-b border-outline-variant/30"
            : "bg-surface border-b border-outline-variant/20"
        )}
      >

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
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                      <div className="h-px bg-surface-container my-1" />
                      <Link
                        href="/offres/comparatif"
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
                href="/cgv"
                className={cn(
                  "text-sm font-semibold transition-colors",
                  pathname === "/cgv"
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
            <Link
              href="/#contact"
              className="h-9 sm:h-10 inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 rounded-lg bg-bleu text-white hover:bg-bleu-petrole text-xs sm:text-sm font-bold shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Demander un devis</span>
            </Link>

            <a
              href={siteConfig.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-xs sm:text-sm font-semibold shadow-xs border border-outline-variant/30 hover:border-bleu/40 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-bleu" />
              <span>Espace Client</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5" />
            </button>
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
          {/* Mobile Dropdown / Accordion: Notre Offre */}
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => setMobileOffersOpen((prev) => !prev)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-left",
                pathname.startsWith("/offres")
                  ? "bg-surface-container text-secondary font-bold"
                  : "text-on-surface hover:bg-surface-container-low"
              )}
              aria-expanded={mobileOffersOpen}
            >
              <span>Notre Offre (Formules &amp; Tarifs)</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200 text-on-surface-variant",
                  mobileOffersOpen && "rotate-180 text-secondary"
                )}
              />
            </button>

            {mobileOffersOpen && (
              <div className="pl-3 pr-1 py-1 mt-1 flex flex-col gap-1 border-l-2 border-secondary/30 ml-4 animate-in slide-in-from-top-1 fade-in duration-150">
                {mainNavItems[0].dropdown?.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  const isActive = pathname === item.href;
                  return isExternal ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors flex items-center justify-between"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between",
                        isActive
                          ? "bg-surface-container text-secondary font-bold"
                          : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                      )}
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}

                <div className="h-px bg-outline-variant/20 my-1" />

                <Link
                  href="/offres/comparatif"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-between",
                    pathname === "/offres/comparatif"
                      ? "bg-secondary text-on-secondary"
                      : "text-secondary hover:bg-secondary/10"
                  )}
                >
                  <span>Comparez nos formules</span>
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>
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
          <Link
            href="/cgv"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
              pathname === "/cgv"
                ? "bg-surface-container text-secondary font-bold"
                : "text-on-surface hover:bg-surface-container-low"
            )}
          >
            Conditions Générales de Vente (CGV)
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
              <span>Demander un devis</span>
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
