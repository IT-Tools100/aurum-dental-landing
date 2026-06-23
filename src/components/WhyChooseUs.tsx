import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

const iconPaths = [
  "M4 12h4l2-6 4 12 2-6h4M5 19h14",
  "M7 8h10M7 12h10M7 16h6M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z",
  "M8 21v-3a4 4 0 0 1 8 0v3M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21h16"
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-white py-20 sm:py-24">
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute bottom-8 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Почему выбирают нас
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Забота, которая ощущается ещё до лечения
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg lg:ml-auto">
            Aurum Dental помогает пациенту спокойно пройти путь от первой консультации
            до лечения: с понятной диагностикой, прозрачным планом и командой, которая
            объясняет решения простым языком.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2">
          {siteConfig.advantages.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex min-h-64 overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,37,69,0.07)] transition duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_28px_80px_rgba(11,37,69,0.13)]"
            >
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-skySoft to-transparent opacity-70 transition duration-300 group-hover:w-36 group-hover:opacity-100" />
              <div className="absolute -bottom-14 -right-12 size-36 rounded-full border border-gold/25 bg-gold/10 transition duration-500 group-hover:scale-125" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-5">
                  <div className="grid size-14 place-items-center rounded-2xl bg-navy text-white shadow-soft transition duration-300 group-hover:rotate-3 group-hover:bg-royal">
                    <svg
                      aria-hidden="true"
                      className="size-7"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <path d={iconPaths[index]} />
                    </svg>
                  </div>
                  <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-semibold text-navy">
                    {item.metric}
                  </span>
                </div>

                <div className="mt-8 max-w-xl">
                  <h3 className="text-xl font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-gradient-to-r from-navy/10 via-royal/20 to-transparent" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                    Aurum standard
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
