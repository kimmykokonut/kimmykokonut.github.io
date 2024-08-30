import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <section id="home">
        <h2>Kim Robinson</h2>
        <p>something cool here</p>
      </section>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
