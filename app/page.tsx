import Hero from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
