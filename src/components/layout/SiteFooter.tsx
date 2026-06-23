import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const { contact } = siteConfig;

  return (
    <footer id="contacts" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-royal/25 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.85fr_0.8fr]">
          <div>
            <a className="inline-flex items-center gap-3" href="#top" aria-label="Aurum Dental home">
              <span className="grid size-12 place-items-center rounded-full bg-white text-sm font-bold text-navy">
                AD
              </span>
              <span className="text-xl font-bold tracking-tight">{siteConfig.name}</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
              {siteConfig.description}
            </p>
            <a
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-navy transition hover:bg-ice"
              href="#appointment"
            >
              Записаться на консультацию
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Разделы
            </h2>
            <nav className="mt-5 grid gap-3 text-sm text-white/72" aria-label="Footer navigation">
              {siteConfig.navItems.map((item) => (
                <a key={item.href} className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              ))}
              <a className="transition hover:text-white" href="#appointment">
                Запись
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Контакты
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/72">
              <p>{contact.address}</p>
              <p>
                <a className="transition hover:text-white" href={`tel:${contact.phone}`}>
                  {contact.phone}
                </a>
              </p>
              <p>
                <a className="transition hover:text-white" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Часы работы
            </h2>
            <dl className="mt-5 space-y-3 text-sm">
              {contact.hours.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4">
                  <dt className="text-white/58">{item.label}</dt>
                  <dd className="font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. Portfolio concept.</p>
          <p>Вымышленная клиника. Реальные медицинские обещания не используются.</p>
        </div>
      </Container>
    </footer>
  );
}
