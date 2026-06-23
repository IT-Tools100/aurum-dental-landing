import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-white py-20 sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Цены
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Прозрачные ориентиры до начала лечения
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg lg:ml-auto">
            Мы показываем стартовые цены заранее, а точную стоимость фиксируем после
            диагностики и персонального плана лечения.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
            {pricing.items.map((item) => (
              <article
                key={item.service}
                className="group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,37,69,0.07)] transition duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_28px_80px_rgba(11,37,69,0.13)]"
              >
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-skySoft transition duration-500 group-hover:scale-125 group-hover:bg-mint/20" />
                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-navy">
                      {item.service}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
                  </div>
                  <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
                    Стартовая цена
                  </span>
                </div>

                <div className="relative mt-auto pt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                    Стоимость
                  </p>
                  <p className="mt-2 text-4xl font-bold tracking-tight text-navy">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <aside className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy p-7 text-white shadow-soft">
            <div className="absolute -right-16 -top-16 size-44 rounded-full bg-royal/35 blur-2xl" />
            <div className="absolute -bottom-20 left-8 size-44 rounded-full bg-mint/20 blur-2xl" />

            <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Прозрачная стоимость
              </p>
              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Без неожиданностей после консультации
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/72">{pricing.note}</p>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white">Что входит в подход</p>
                <ul className="mt-4 space-y-3 text-sm text-white/72">
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-gold" />
                    понятное объяснение этапов лечения
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-mint" />
                    диагностика перед финальной стоимостью
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-royal" />
                    персональный план без давления
                  </li>
                </ul>
              </div>

              <Button href="#appointment" variant="secondary" className="mt-8 border-white/20">
                Записаться на консультацию
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
