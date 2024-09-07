import Hero from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
