import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { Experience } from "@/app/sections/Experience";
import { Blog } from "@/app/sections/Blog";
import { Contact } from "@/app/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
