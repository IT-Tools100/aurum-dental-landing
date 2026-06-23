import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

const iconPaths = [
  "M5 12h14M8 8h8M8 16h5",
  "M4 12h4l2-6 4 12 2-6h4",
  "M7 7h10M7 12h10M7 17h6M5 3h14v18H5z",
  "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z"
];

export function TreatmentProcess() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ice via-white to-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Процесс лечения
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Понятный путь пациента от первого визита до сопровождения
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg lg:ml-auto">
            Мы заранее объясняем этапы, фиксируем план и двигаемся последовательно:
            без давления, спешки и неожиданностей по стоимости.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-7 top-8 hidden h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-gold via-royal to-mint lg:block" />

          <div className="grid gap-5 lg:grid-cols-4">
            {siteConfig.process.map((item, index) => (
              <article
                key={item.step}
                className="group relative rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,37,69,0.07)] transition duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_28px_80px_rgba(11,37,69,0.13)]"
              >
                <div className="absolute -left-3 top-8 h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-gold via-royal to-transparent lg:hidden" />
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-skySoft transition duration-500 group-hover:scale-125 group-hover:bg-mint/20" />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl bg-navy text-white shadow-soft ring-4 ring-white transition duration-300 group-hover:bg-royal">
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
                  <span className="text-4xl font-bold tracking-tight text-navy/10 transition duration-300 group-hover:text-gold/35">
                    {item.step}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-xl font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
