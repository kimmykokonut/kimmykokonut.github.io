interface tabData {
  title: string;
  id: string;
  content: JSX.Element;
}

export const TAB_DATA: tabData[] = [
  {
    title: "Tech Stack",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>C#</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>React</li>
        <li>ASP.NET</li>
        <li>Django</li>
        <li>Flask</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Material UI</li>
        <li>Bootstrap</li>
        <li>Webpack</li>
      </ul>
    )
  },
  {
    title: "DB & Test",
    id: "databaseTest",
    content: (
      <ul>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>SQLite</li>
        <li>Firestore (NoSql)</li>
        <li>Jest</li>
        <li>Unittest</li>
        <li>MSTest</li>
        <li>Cypress</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <ul>
          <li>Certificate: Web & Mobile Development</li>
          <li>Epicodus full-stack bootcamp, Portland, OR</li>
        </ul>
        <br />
        <ul>
          <li>B.S. Natural Resources Management & Engineering</li>
          <li>University of Connecticut, Storrs</li>
        </ul>
      </div>
    )
  }
]