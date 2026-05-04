import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <div className="section-divider mx-auto max-w-6xl" />
      <About />

      <div className="section-divider mx-auto max-w-6xl" />
      <Skills />

      <div className="section-divider mx-auto max-w-6xl" />
      <Experience />

      <div className="section-divider mx-auto max-w-6xl" />
      <Projects />

      <div className="section-divider mx-auto max-w-6xl" />
      <Contact />

      <Footer />
    </main>
  );
}
