import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-white py-20 sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
            Результаты
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Концепт до и после без медицинских обещаний
          </h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Блок показывает, как клиника может визуально объяснить путь пациента:
            от первичного запроса к понятному плану и аккуратному эстетическому ориентиру.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
          <div className="grid gap-5 md:grid-cols-2">
            {siteConfig.results.items.map((item) => (
              <article
                key={item.label}
                className="group flex h-full overflow-hidden rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_18px_60px_rgba(11,37,69,0.08)] transition duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_28px_80px_rgba(11,37,69,0.13)]"
              >
                <div className="relative min-h-[29rem] w-full flex-1 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-ice via-white to-skySoft">
                  <div className="absolute inset-x-10 bottom-0 h-[22rem] rounded-t-[9rem] bg-white/70 shadow-[inset_0_0_0_1px_rgba(11,37,69,0.06)] transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-1/2 top-12 grid size-28 -translate-x-1/2 place-items-center rounded-full bg-navy text-2xl font-bold text-white shadow-soft ring-8 ring-white/70">
                    {item.label}
                  </div>
                  <div className="absolute bottom-8 left-6 right-6 flex h-56 flex-col justify-center rounded-2xl border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur">
                    <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy p-7 text-white shadow-soft">
            <div className="absolute -right-16 -top-16 size-44 rounded-full bg-royal/35 blur-2xl" />
            <div className="absolute -bottom-20 left-8 size-44 rounded-full bg-mint/20 blur-2xl" />
            <div className="relative flex h-full flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                План естественной улыбки
              </p>
              <p className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Сначала диагностика, затем реалистичный план изменений.
              </p>
              <p className="mt-5 text-sm leading-7 text-white/70">{siteConfig.results.note}</p>
              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-white/72 backdrop-blur">
                Мы показываем не обещание результата, а понятный сценарий: оценка ситуации,
                обсуждение ожиданий и аккуратный план лечения.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
