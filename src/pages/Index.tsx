import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/portfolio/Services";
import WhyChooseMe from "@/components/portfolio/WhyChooseMe";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
