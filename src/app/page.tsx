import { AppointmentForm } from "@/components/AppointmentForm";
import { Doctors } from "@/components/Doctors";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { TreatmentProcess } from "@/components/TreatmentProcess";
import { Testimonials } from "@/components/Testimonials";
import { TrustStats } from "@/components/TrustStats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <TrustStats />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <TreatmentProcess />
        <Results />
        <Testimonials />
        <Pricing />
        <FAQ />
        <AppointmentForm />
      </main>
      <SiteFooter />
    </>
  );
}
