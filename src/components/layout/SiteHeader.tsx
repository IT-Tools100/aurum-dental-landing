"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <a
          className="flex items-center gap-3"
          href="#top"
          aria-label="Aurum Dental home"
          onClick={closeMenu}
        >
          <span className="grid size-10 place-items-center rounded-full bg-navy text-sm font-bold text-white">
            AD
          </span>
          <span className="text-base font-bold tracking-tight text-navy">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} className="transition hover:text-navy" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#appointment" className="hidden sm:inline-flex">
          Записаться
        </Button>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="grid size-11 place-items-center rounded-full border border-navy/10 bg-white text-navy shadow-sm lg:hidden"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Открыть меню</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-navy/10 bg-white transition-[grid-template-rows] duration-300 lg:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="py-4">
            <nav className="grid gap-2 text-sm font-semibold text-navy" aria-label="Mobile navigation">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-xl px-3 py-3 transition hover:bg-ice"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white transition hover:bg-royal"
                href="#appointment"
                onClick={closeMenu}
              >
                Записаться
              </a>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
