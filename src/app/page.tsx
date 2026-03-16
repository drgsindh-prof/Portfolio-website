import { Header, Footer } from "@/components/layout";
import {
  Hero,
  About,
  InstitutionBuilder,
  Timeline,
  GlobalMap,
  Innovations,
  Research,
  Patents,
  Conferences,
  Testimonials,
  Awards,
  Gallery,
  Contact,
} from "@/components/sections";
import { ScrollProgress, BackToTop, FloatingCTA } from "@/components/ui";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <InstitutionBuilder />
        <Innovations />
        <Timeline />
        <Conferences />
        <GlobalMap />
        <Research />
        <Patents />
        <Testimonials />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingCTA />
    </>
  );
}
