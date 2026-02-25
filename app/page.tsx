import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveBackground from "@/components/LiveBackground";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Projects from "@/components/Projects";
import Vision from "@/components/Vision";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LiveBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Manifesto />
      <Projects />
      <Vision />
      <Footer />
    </main>
  );
}


