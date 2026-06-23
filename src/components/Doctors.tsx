import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

const portraitStyles = [
  "from-ice via-skySoft to-white",
  "from-white via-ice to-skySoft",
  "from-skySoft via-white to-ice"
];

export function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
            Врачи
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Команда, которой доверяют сложные решения
          </h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Каждый специалист отвечает за свою область лечения, а пациент получает
            спокойную коммуникацию, аккуратную диагностику и понятный план действий.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-6 lg:grid-cols-3">
          {siteConfig.doctors.map((doctor, index) => (
            <article
              key={doctor.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_18px_60px_rgba(11,37,69,0.08)] transition duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_28px_90px_rgba(11,37,69,0.14)]"
            >
              <div
                className={`relative min-h-80 overflow-hidden bg-gradient-to-br ${portraitStyles[index]}`}
              >
                <div className="absolute inset-x-8 bottom-0 h-64 rounded-t-[8rem] bg-gradient-to-b from-white/70 to-white/30 shadow-[inset_0_0_0_1px_rgba(11,37,69,0.06)] transition duration-500 group-hover:scale-105" />
                <div className="absolute left-1/2 top-14 grid size-28 -translate-x-1/2 place-items-center rounded-full bg-navy text-3xl font-bold tracking-tight text-white shadow-soft ring-8 ring-white/70 transition duration-300 group-hover:bg-royal">
                  {doctor.initials}
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                    {doctor.specialty}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    Портрет-заглушка специалиста
                  </p>
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-mint/30 bg-white/80 px-3 py-1 text-xs font-semibold text-navy shadow-sm backdrop-blur">
                  {doctor.experience}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-navy">
                    {doctor.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-royal">
                    {doctor.specialty}
                  </p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                  {doctor.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-navy/10 pt-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Опыт
                    </p>
                    <p className="mt-1 text-lg font-bold text-navy">
                      {doctor.experience}
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center rounded-full border border-navy/10 px-4 py-2 text-sm font-semibold text-navy transition hover:border-royal/30 hover:bg-ice hover:text-royal"
                    href="#appointment"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
