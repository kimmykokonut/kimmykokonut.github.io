"use client";

import Card from "@/components/Card";

export default function About() {
  return (
    <section 
    id="about" 
    role="region" 
    aria-labelledby="about-heading"
      className="section-offset flex justify-center items-center min-h-screen"
    >
      <Card
        background="linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
        color="#333"
        width="90%"
        maxWidth="600px"
        padding="2rem"
        margin="5rem auto"
        border="none"
        borderRadius="10px"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <h2 className="text-center font-bold text-2xl mb-4">Kim Robinson</h2>
        <p className="text-lg font-semibold mb-4">Initiative * Integrity * Interpersonal Skills</p>
        <p className="text-md leading-relaxed mb-4">
          I am a recent graduate of Epicodus' full-stack bootcamp, where I earned a certificate in web and mobile development. I have hands-on experience with JavaScript, React, C#, ASP.NET, and Web APIs, having completed over 65 projects.
        </p>
        <p className="text-md leading-relaxed mb-4">
          During my internship at Clarity Innovations, I contributed to an EdTech dashboard and reporting tool, adding features and resolving issues using React and JavaScript. I collaborated with a team, presented prototypes using Figma, and styled applications with Tailwind CSS.
        </p>
        <p className="text-md leading-relaxed mb-4">
          My diverse background in science, education, and creative roles equips me with a unique approach to problem-solving and attention to detail. I am fluent in Spanish and conversationally proficient in Italian, and I enjoy playing the ukulele and flute.
        </p>
        <p className="text-md leading-relaxed">
          When I'm not coding, you can find me exploring the outdoors: foraging for mushrooms, hiking to alpine lakes, or nordic skiing.
        </p>
          </Card>
        </section>
        );
}