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
      <ul className="list-disc pl-2">
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
        <dl className="max-w-md divide-y divide-gray-300 dark:divide-gray-700 pl-2">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 font-semibold">Certificate: Web & Mobile Development</dt>
            <dd>Epicodus Full-Stack Bootcamp</dd>
            <dd>Portland, OR</dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 font-semibold">B.S. Natural Resources Management & Engineering</dt>
            <dd>Minor: Spanish</dd>
            <dd>University of Connecticut, Storrs</dd>
          </div>
        </dl>
      </div>
    )
  }
]