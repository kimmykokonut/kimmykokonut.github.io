export interface projectDataProps {
  title: string;
  websiteLink?: string;
  description: string;
  tech: string;
  imageSrc: string;
  codeLink: string;
}

export const PROJECT_DATA: projectDataProps[] = [
  {
    title: "Job Journey",
    websiteLink: "https://job-journey-neon.vercel.app/",
    description: "To battle the frustration in the job hunting process, I chose to learn some new technologies and frameworks. Wanting to improve my skills in data visualization, I took my job application spreadsheet data and used Chart.js to create a pie chart showing application status (boo to those companies that ghost us!), a bar chart showing job titles and a line graph showing number of applications per week to encourage motivation to keep going. The bonus feature is an inspirational quote every time the page is refreshed.",
    tech: "Next.js | Typescript | Chart.js | D3 | Tailwind CSS",
    imageSrc: "/static/jobs.png",
    codeLink: "https://github.com/kimmykokonut/job-journey",
  },
  {
    title: "Team Timework Report",
    websiteLink: "https://drive.google.com/file/d/1JfCcRP1TIMii8n3-PCKlVOs0mCYNcQG-/view",
    description: "Teamwork Time Report is a web application developed for an internal team at Clarity Innovations. The application leverages the Teamwork API to generate hierarchical project time reports, allowing users to filter time-log data by date, keyword, and hours logged. This provides a more structured and detailed view of project time data, facilitating comprehensive post-project analysis.",
    tech: "React | Javascript | Node.js | ESLint | Tailwind CSS | GitLab | TeamWork API",
    imageSrc: "/static/clarity.png",
    codeLink: "https://github.com/kimmykokonut/ci-teamwork",
  },
  {
    title: "Myco Matrix",
    websiteLink: "https://myco.onrender.com/",
    description: "Automated field trip registration and lottery",
    tech: "React | Typescript | Python | Django | Material UI | PostgreSQL",
    imageSrc: "/static/mycoHome.png",
    codeLink: "https://github.com/kimmykokonut/Capstone",
  },
  {
    title: "Beyond Tipping",
    websiteLink: "https://beyondtipping.onrender.com/",
    description: "Find tip-free Portland Restaurants! Group Project: I built the flask backend, API endpoints, front end API calls to render data to the Restaurant List page",
    tech: " React | Typescript | Python | Flask | Tailwind CSS | SQLite",
    imageSrc: "/static/tipping.png",
    codeLink: "https://github.com/kimmykokonut/beyondtipping",
  },
  {
    title: "Garden Guardian",
    websiteLink: "https://garden-client.onrender.com/",
    description: "A user can create and organize garden data via grids(to come: track yields over time)",
    tech: "TypeScript | React | Tailwind | Html | CSS | PostgreSQL | C# | ASP.NET",
    imageSrc: "/static/garden.png",
    codeLink: "https://github.com/kimmykokonut/Garden-guardian",
  },
  {
    title: "The Dump Truck",
    websiteLink: "https://dumpling-atlas.netlify.app/dumplings",
    description: "A user can see, add, edit and delete this work -in -progress dumpling database.",
    tech: "TypeScript | React | Python | Django | CSS | PostgreSQL",
    imageSrc: "/static/dumplingapi.png",
    codeLink: "https://github.com/kimmykokonut/dumpling-api",
  },
  {
    title: "Sound Check",
    websiteLink: "https://sound-check.netlify.app/",
    description: "Find a concert, make a friend. Group Project: I wrote the API calls, designed the Who &#39;s Coming page and built the location search filter ",
    tech: "React | JavaScript | Html | CSS | Material UI | JamBase API",
    imageSrc: "/static/soundcheck.png",
    codeLink: "https://github.com/kimmykokonut/sound-check",
  },
  {
    title: "Inventory Tracker",
    websiteLink: "https://kimmykokonut.github.io/inventory-tracker-cra-redux/",
    description: "An independent project for Epicodus to build a React project managing local and shared state with class components, then refactored to functional components and added Redux to manage state, including TDD Jest testing",
    tech: "React | JavaScript | Html | CSS | Bootstrap | Redux | Jest | npm",
    imageSrc: "/static/gelato.png",
    codeLink: "https://github.com/kimmykokonut/inventory-tracker-cra-redux",
  },
  {
    title: "Not Wordle",
    websiteLink: "https://kimmykokonut.github.io/word-puzzle/",
    description: "A hangman-style word puzzle with 3 play modes built in 16 hours as a pair project. There is a fun Giphy API call, but not visible on deployed github page.",
    tech: "React | JavaScript | Html | CSS | Redux | Giphy API",
    imageSrc: "/static/puzzle.png",
    codeLink: "https://github.com/kimmykokonut/word-puzzle",
  },
  {
    title: "Currency Exchanger",
    websiteLink: "https://kimmykokonut.github.io/currency-exchanger",
    description: "A code review for Epicodus bootcamp where I utilized skills of API calls to allow a user to convert 16 different currencies and receive current currency rate and amount in chosen country's currency.",
    tech: "JavaScript | HTML | CSS | npm | Bootstrap | API",
    imageSrc: "/static/currency.png",
    codeLink: "https://github.com/kimmykokonut/currency-exchanger",
  },
];