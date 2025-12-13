interface tabData {
  title: string;
  id: string;
  content: JSX.Element;
}

export const TAB_DATA: tabData[] = [
  {
    title: "Languages & Frameworks",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C#</li>
        <li>HTML</li>
        <li className="mb-5">CSS</li>
        <li>React</li>
        <li>React Native</li>
        <li>Vue.js</li>
        <li>Next.js</li>
        <li>Django</li>
        <li>Flask</li>
        <li>Node.js</li>
        <li>ASP.NET</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Tools & Libraries",
    id: "databaseTest",
    content: (
      <ul className="list-disc pl-2">
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>SQLite</li>
        <li className="mb-5">Firestore (NoSql)</li>
        <li>Styled Components</li>
        <li>Quasar</li>
        <li>Material UI</li>
        <li className="mb-5">Bootstrap</li>
        <li>Jest</li>
        <li>Django Test Suite</li>
        <li>Unittest</li>
        <li>MSTest</li>
        <li className="mb-5">Cypress</li>
        <li>Webpack</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <dl className="max-w-md divide-y divide-gray-300 dark:divide-gray-700 pl-2">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 font-semibold">
              Certificate: Web & Mobile Development
            </dt>
            <dd>Epicodus Full-Stack Bootcamp</dd>
            <dd>Portland, OR</dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 font-semibold">
              B.S. Natural Resources Management & Engineering
            </dt>
            <dd>Minor: Spanish</dd>
            <dd>GPA: 3.7/4.0</dd>
            <dd>University of Connecticut</dd>
            <dd>Storrs, CT</dd>
          </div>
        </dl>
      </div>
    ),
  },
];
