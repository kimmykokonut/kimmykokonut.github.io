"use client";

import { useState, useTransition } from "react";
import TabButton from "@/components/TabButton";

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className="section-offset flex justify-center items-center min-h-screen dark:text-white"
    >
      <div className="border-slate-500 py-8 px-4 sm:py-16 xl:px-16">
        <h2 className="text-4xl font-bold mb-4">About Kim</h2>
        <p className="text-base lg:text-lg leading-relaxed mb-2">
          I'm a recent graduate of Epicodus' full-stack bootcamp, where I got hands-on experience with JavaScript, React, C#, ASP.NET, and building Web APIs. During my internship at Clarity Innovations, I tackled feature development and bug fixes for an EdTech dashboard, using React, JavaScript, and GitLab to streamline the user experience. My background in science, education, and creative roles gives me a unique perspective when solving problems—whether it's refactoring code or brainstorming new features.
        </p>
        <p className="text-base lg:text-lg leading-relaxed mb-4">
          Outside of coding, you can find me hiking through the wilderness, foraging for mushrooms, or hitting the trails for some nordic skiing. I'm also fluent in Spanish and conversational in Italian, which comes in handy for building community and working with diverse teams. I'm excited to contribute my skills and enthusiasm to a mission-driven company where I can continue learning and growing alongside a collaborative team.
        </p>
        <div className="flex flex-row mt-8">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
          <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>{" "}Experience{" "}</TabButton>
        </div>
      </div>
    </section>
  );
}