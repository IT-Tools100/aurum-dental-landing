import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Рейтинг ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          className="size-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m10 1.8 2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.42l-4.94 2.6L6 11.51l-4-3.9 5.53-.8L10 1.8Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Отзывы
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Спокойный опыт, который пациенты отмечают чаще всего
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg lg:ml-auto">
            Вымышленные отзывы показывают ожидаемый тон пациентского опыта: ясные
            объяснения, отсутствие давления, современная атмосфера и понятная стоимость.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2">
          {siteConfig.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative flex min-h-72 flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_18px_60px_rgba(11,37,69,0.07)] transition duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_28px_80px_rgba(11,37,69,0.13)]"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-skySoft transition duration-500 group-hover:scale-125 group-hover:bg-gold/10" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-mint to-royal opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-5">
                <Stars rating={testimonial.rating} />
                <span className="rounded-full border border-royal/15 bg-ice px-3 py-1 text-xs font-semibold text-navy">
                  {testimonial.service}
                </span>
              </div>

              <blockquote className="relative mt-7 flex-1 text-lg font-medium leading-8 text-navy">
                <span className="absolute -left-1 -top-5 text-6xl font-bold leading-none text-gold/20">
                  “
                </span>
                <p className="relative">{testimonial.quote}</p>
              </blockquote>

              <div className="relative mt-8 flex items-center gap-4 border-t border-navy/10 pt-5">
                <div className="grid size-12 place-items-center rounded-full bg-navy text-sm font-bold text-white shadow-soft">
                  {testimonial.name.replace(".", "").slice(0, 2)}
                </div>
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted">Пациент Aurum Dental</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
