import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const visualDetails = [
  { label: "Digital scan", value: "3D" },
  { label: "Care plan", value: "Clear" },
  { label: "Comfort", value: "Calm" }
];

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-ice via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top_right,rgba(79,209,197,0.22),transparent_34%),radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_36%)]" />

      <Container className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-royal/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-royal shadow-sm">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#appointment" className="w-full sm:w-auto">
              {hero.primaryCta}
            </Button>
            <Button href="#services" variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta}
            </Button>
          </div>

          <dl className="mt-10 grid gap-3 rounded-2xl border border-navy/10 bg-white/80 p-3 shadow-soft backdrop-blur sm:max-w-xl sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-paper px-3 py-4 text-center">
                <dt className="text-xs font-medium text-muted sm:text-sm">{stat.label}</dt>
                <dd className="mt-1 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full border border-gold/30 bg-gold/10 blur-sm sm:block" />
          <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-mint/20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-navy/10 bg-white p-4 shadow-soft">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-navy via-[#123A66] to-royal p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white/70">Aurum Dental Suite</p>
                  <p className="mt-2 max-w-56 text-2xl font-bold leading-tight">
                    Спокойная диагностика и понятный план лечения
                  </p>
                </div>
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/12 text-lg font-bold text-gold ring-1 ring-white/15">
                  AD
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-mint/20 text-mint">
                    <span className="size-5 rounded-full border-2 border-current" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Digital consultation</p>
                    <p className="mt-1 text-xs text-white/65">
                      Сканирование, снимки и план без давления
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {visualDetails.map((item) => (
                    <div key={item.label} className="rounded-xl bg-white px-3 py-3 text-navy">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-[0.9fr_1.1fr] gap-3">
                <div className="rounded-2xl bg-white p-4 text-navy">
                  <p className="text-xs font-semibold text-muted">Next visit</p>
                  <p className="mt-2 text-lg font-bold">45-60 мин</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <p className="text-xs font-semibold text-white/65">Patient note</p>
                  <p className="mt-2 text-sm font-medium leading-5">
                    Комфортный темп и объяснение каждого этапа.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-soft sm:left-auto sm:right-6 sm:w-72">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                Transparent care
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-navy">
                План лечения и ориентир по стоимости до начала процедур.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
