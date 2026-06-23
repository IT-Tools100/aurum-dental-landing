import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function TrustStats() {
  return (
    <section className="relative bg-white py-12 sm:py-14">
      <Container>
        <div className="grid gap-4 rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_18px_60px_rgba(11,37,69,0.07)] sm:grid-cols-3">
          {siteConfig.trustStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl bg-gradient-to-b from-ice to-white p-5 text-center sm:text-left"
            >
              <p className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {stat.value}
              </p>
              <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-royal">
                {stat.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{stat.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
