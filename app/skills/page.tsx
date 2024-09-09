"use client"

import Card from "@/components/Card";

const Skills = () => {
  return (
    <section id="skills" role="region" aria-label="Skills">
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
          <h4>Languages</h4>
          <span className="skill">JavaScript</span>
          <span className="skill">TypeScript</span>
          <span className="skill">C#</span>
          <span className="skill">Python</span>
          <h4>Frameworks</h4>
          <span className="skill">Node.js</span>
          <span className="skill">React</span>
          <span className="skill">Redux</span>
          <span className="skill">ASP.NET</span>
          <span className="skill">Django</span>
          <span className="skill">Flask</span>
          <h4>Libraries</h4>
          <span className="skill">Bootstrap</span>
          <span className="skill">Material UI</span>
          <span className="skill">Webpack</span>
          <span className="skill">Firebase</span>
          <h4>Databases</h4>
          <span className="skill">MySQL</span>
          <span className="skill">Firestore (NoSql)</span>
          <span className="skill">PostgreSQL</span>
          <span className="skill">SQLite</span>
          <h4>Other Web Technologies</h4>
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <h4>Testing</h4>
          <span className="skill">MSTest</span>
          <span className="skill">Jest</span>
          <span className="skill">Unittest</span>
          <h4>Version Control</h4>
          <span className="skill">Git</span>
          <h4>Other Languages</h4>
          <span className="skill">Spanish</span>
          <span className="skill">Italian</span>
      </Card>
  </section >
  );
};
export default Skills;