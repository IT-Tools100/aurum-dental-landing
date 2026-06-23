"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Вопросы, которые помогают принять спокойное решение
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Короткие ответы о первом приёме, стоимости, страховых программах и
              комфортном лечении в Aurum Dental.
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faq.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_18px_60px_rgba(11,37,69,0.07)] transition duration-300 hover:border-royal/25 hover:shadow-[0_24px_70px_rgba(11,37,69,0.11)]"
                >
                  <button
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-bold leading-6 text-navy sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full border border-navy/10 text-lg font-semibold text-navy transition duration-300 ${
                        isOpen ? "rotate-45 bg-navy text-white" : "bg-ice"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6">
                        <div className="h-px bg-gradient-to-r from-gold/50 via-royal/20 to-transparent" />
                        <p className="pt-5 text-sm leading-7 text-muted sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
