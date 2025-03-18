"use client";

import TabButton from "@/components/TabButton";
import { useState, useTransition } from "react";
import { TAB_DATA } from "../data/tabData";

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className="text-[#121212] dark:text-white"
    >
      <div className="border-slate-500 py-8 px-4 sm:py-16 lg:px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Kim</h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-2">
          Hey there! I am a full-stack developer with a unique blend of
          experience in science, education, and creative roles. Currently, I am
          building a web prototype for a local company using Vue.js and
          TypeScript. Passionate about community building, I have volunteered in
          various educational and environmental initiatives. I am excited to
          contribute my diverse skill set to a mission-driven company and grow
          alongside a collaborative team.
        </p>
        <div className="flex flex-row mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Tech Stack{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("databaseTest")}
            active={tab === "databaseTest"}
          >
            {" "}
            DB & Test{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
        </div>
        <div className="mt-4">
          {selectedTab ? selectedTab.content : <p>Content not found</p>}
        </div>
      </div>
    </section>
  );
}
