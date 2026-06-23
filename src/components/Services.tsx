import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

const iconPaths = [
  "M7 12h10M12 7v10",
  "M8 12c2.8-5.4 5.2-5.4 8 0-2.8 5.4-5.2 5.4-8 0Z",
  "M6 9c2.4-3.2 9.6-3.2 12 0M8 13c2 2.2 6 2.2 8 0",
  "M12 4v16M8 8h8M9 20h6",
  "M6 8c3.2-2.2 8.8-2.2 12 0M7 13c2.8 1.8 7.2 1.8 10 0M9 18h6",
  "M12 5v14M5 12h14"
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-skySoft blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
            Услуги
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Комплексная стоматология с ясным планом лечения
          </h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            От первой диагностики до эстетических и восстановительных процедур: каждая
            услуга построена вокруг комфорта, прозрачности и естественного результата.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex min-h-[19rem] flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_16px_50px_rgba(11,37,69,0.06)] transition duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_24px_70px_rgba(11,37,69,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-mint to-royal opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-ice transition duration-300 group-hover:scale-125 group-hover:bg-skySoft" />

              <div className="relative flex items-start justify-between gap-5">
                <div className="grid size-14 place-items-center rounded-2xl bg-navy text-white shadow-soft ring-1 ring-white/50 transition duration-300 group-hover:bg-royal">
                  <svg
                    aria-hidden="true"
                    className="size-7"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d={iconPaths[index]} />
                  </svg>
                </div>
                <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
                  {service.marker}
                </span>
              </div>

              <div className="relative mt-7 flex flex-1 flex-col">
                <h3 className="text-xl font-bold tracking-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  {service.description}
                </p>
                <a
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-royal transition group-hover:gap-3 group-hover:text-navy"
                  href="#appointment"
                >
                  Подробнее
                  <span aria-hidden="true" className="text-gold">
                    -&gt;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
