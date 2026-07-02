"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navigation, site } from "@/lib/site";

const CLOSE_DURATION = 500;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastVideoHero, setPastVideoHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!isHome) {
        setPastVideoHero(false);
        return;
      }
      const videoHero = document.querySelector<HTMLElement>("[data-video-hero]");
      if (!videoHero) {
        setPastVideoHero(false);
        return;
      }
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      setPastVideoHero(videoHero.getBoundingClientRect().bottom <= headerHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    // Mount first, then flip visible on the next frame so transitions run.
    const raf = requestAnimationFrame(() => setMenuVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [mobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const openMenu = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setMobileMenuOpen(false), CLOSE_DURATION);
  };

  const toggleMenu = () => {
    if (menuVisible) closeMenu();
    else openMenu();
  };

  const headerHidden = pastVideoHero && !mobileMenuOpen;
  const overlayHeader = isHome;
  const navLinkClass = overlayHeader
    ? "text-white/70 hover:text-white"
    : "text-black/60 hover:text-black";
  const activeNavLinkClass = overlayHeader ? "text-white" : "text-black";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-500 ease-in-out will-change-transform ${
        headerHidden ? "pointer-events-none -translate-y-[110%] opacity-0" : "translate-y-0 opacity-100"
      } ${
        overlayHeader
          ? `${scrolled ? "bg-black/70" : "bg-black/25"} border-white/15 text-white`
          : "border-black/15 bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 md:px-12 lg:px-16">
        <Logo variant={overlayHeader ? "onDark" : "onLight"} />
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-xs font-black uppercase tracking-[0.16em] transition-colors duration-200 ${
                pathname === item.href ? activeNavLinkClass : navLinkClass
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`inline-flex min-h-9 items-center border px-3.5 text-[11px] font-black uppercase tracking-[0.16em] transition ${
              overlayHeader
                ? "border-white/80 !text-white hover:bg-white hover:!text-black"
                : "border-black bg-black !text-white hover:bg-white hover:!text-black"
            }`}
          >
            {site.cta.contact}
          </Link>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuVisible}
          className={`relative z-[60] h-9 w-9 lg:hidden ${overlayHeader ? "text-white" : "text-black"}`}
        >
          <Menu
            className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-300 ${
              menuVisible ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
            aria-hidden="true"
          />
          <X
            className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-300 ${
              menuVisible ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      {mobileMenuOpen ? (
        <>
          <div
            onClick={closeMenu}
            aria-hidden="true"
            className={`fixed inset-0 z-40 backdrop-blur-md transition-opacity duration-[400ms] lg:hidden ${
              menuVisible ? "opacity-100" : "opacity-0"
            } ${overlayHeader ? "bg-black/55" : "bg-white/70"}`}
          />
          <div className="absolute inset-x-0 top-[57px] z-50 lg:hidden">
            <div
              className={`absolute inset-0 border-b backdrop-blur-xl ${
                overlayHeader ? "border-white/15 bg-black/85" : "border-black/15 bg-white"
              }`}
            />
            <nav
              className="relative z-10 flex flex-col items-center gap-5 px-6 py-8"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`text-lg font-black uppercase tracking-[0.08em] transition-colors sm:text-xl ${
                    overlayHeader ? "text-white/75 hover:text-white" : "text-black/70 hover:text-black"
                  }`}
                  style={{
                    opacity: menuVisible ? 1 : 0,
                    transform: menuVisible ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 400ms ease-out, transform 400ms ease-out",
                    transitionDelay: menuVisible ? `${350 + index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div
                style={{
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 400ms ease-out, transform 400ms ease-out",
                  transitionDelay: menuVisible ? `${350 + navigation.length * 50}ms` : "0ms",
                }}
              >
                <Link
                  href="/contact"
                  className={`inline-flex min-h-10 items-center border px-4 text-[11px] font-black uppercase tracking-[0.16em] ${
                    overlayHeader ? "border-white/80 !text-white" : "border-black bg-black !text-white"
                  }`}
                >
                  {site.cta.contact}
                </Link>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
