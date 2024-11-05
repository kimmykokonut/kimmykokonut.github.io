import Hero from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f2f3f4] dark:bg-[#1e1e1e] mx-auto px-12 py-4">
      <div className="container mt-24 mx-auto overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
