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
    description:
      "During my job search, I decided to dive into new technologies and frameworks, with a focus on data visualization. I built an application using Chart.js that dynamically displays three interactive charts based on my job application data. The app also includes a form for adding new entries and a fun feature that generates an inspirational quote with each page refresh.",
    tech: "Next.js | Typescript | Chart.js | D3 | Tailwind CSS",
    imageSrc: "/static/jobs.png",
    codeLink: "https://github.com/kimmykokonut/job-journey",
  },
  {
    title: "Team Timework Report",
    websiteLink:
      "https://drive.google.com/file/d/1JfCcRP1TIMii8n3-PCKlVOs0mCYNcQG-/view",
    description:
      "During my internship with Clarity Innovations, I contributed to the development of the Teamwork Time Report, a web app that uses the Teamwork API to generate detailed project time reports. I improved code quality by implementing a linter and refactoring components, added features like task filtering and time allocation visualizations, and optimized the UI using Tailwind CSS. My work also included debugging, collaborating in code reviews, and ensuring the application was fully responsive and aligned with the company’s design standards.",
    tech: "React | Javascript | Node.js | ESLint | Tailwind CSS | GitLab | TeamWork API",
    imageSrc: "/static/clarity.png",
    codeLink: "https://github.com/kimmykokonut/ci-teamwork",
  },
  {
    title: "Myco Matrix",
    websiteLink: "https://myco.onrender.com/",
    description:
      "Myco Matrix is an application designed to simplify the field trip registration process for foragers. Users can sign up, register for field trips, and access essential resources like packing lists and permits for Pacific Northwest locations. Administrators can easily create, edit, and manage trips, run lotteries to assign spots, and automate communication with participants. Inspired by my volunteer work with the Oregon Mycological Society, this project aims to streamline trip coordination and foster a stronger sense of community among members.",
    tech: "React | Typescript | Python | Django | Material UI | PostgreSQL",
    imageSrc: "/static/mycoHome.png",
    codeLink: "https://github.com/kimmykokonut/Capstone",
  },
  {
    title: "Beyond Tipping",
    websiteLink: "https://beyondtipping.onrender.com/",
    description:
      "This team project, built in 4 days at Epicodus, showcases Portland-area restaurants that have adopted a no-tipping model, offering flat prices or service fees. The app features a list and interactive map of restaurants. I contributed to building the backend, creating API endpoints, and connecting the React frontend to the Flask API. I also styled the Restaurant List page, added a filter feature, and authored the detailed README documentation.",
    tech: " React | Typescript | Python | Flask | Tailwind CSS | SQLite",
    imageSrc: "/static/tipping.png",
    codeLink: "https://github.com/kimmykokonut/beyondtipping",
  },
  {
    title: "Garden Guardian",
    websiteLink: "https://garden-client.onrender.com/",
    description:
      "Garden Tracker, inspired by an unfinished team project from Epicodus, is an ambitious gardening app. I restructured the database relationships, transitioned from MySQL to PostgreSQL, and revamped the UI by switching from Preact to React with Typescript, styled using Tailwind. The API allows users to manage garden beds and seeds, create grids, and plant seeds within them. Users can interact with the API through Postman or Swagger, while the UI is a work in progress.",
    tech: "TypeScript | React | Tailwind | Html | CSS | PostgreSQL | C# | ASP.NET",
    imageSrc: "/static/garden.png",
    codeLink: "https://github.com/kimmykokonut/Garden-guardian",
  },
  {
    title: "The Dump Truck",
    websiteLink: "https://github.com/kimmykokonut/dumpling-client",
    description:
      "This project is a Django WebAPI that manages dumpling information, categories, and tags, with PostgreSQL integration and both one-to-many and many-to-many relationships. Users can register, sign in, view dumpling data, and create, edit, or delete their own entries. I set up admin and user accounts, managed permissions, and am in the process of building a React frontend to consume the API. The project also incorporates dotenv for environment variable management.",
    tech: "TypeScript | React | Python | Django | CSS | PostgreSQL",
    imageSrc: "/static/dumplingapi.png",
    codeLink: "https://github.com/kimmykokonut/dumpling-api",
  },
  {
    title: "Sound Check",
    websiteLink: "https://sound-check.netlify.app/",
    description:
      "A React application that helps users discover local bands, save favorite artists, and connect with others through a live feed. Users can search for concerts in their area or other cities, follow artists, and see saved shows in their dashboard. As part of a team of five at Epicodus, we built this app in 3 days using React, Vite, and Firestore for user authentication and data management. I worked on integrating the JamBase API, building the 'Who's Coming' page, and implementing a concert search by city. I also handled the deployment on Netlify.",
    tech: "React | JavaScript | Html | CSS | Material UI | API",
    imageSrc: "/static/soundcheck.png",
    codeLink: "https://github.com/kimmykokonut/sound-check",
  },
  {
    title: "Inventory Tracker",
    websiteLink: "https://kimmykokonut.github.io/inventory-tracker-cra-redux/",
    description:
      "An 8 hour solo project for Epicodus to build a React project managing local and shared state with class components, then refactored to functional components and added Redux to manage state, including TDD Jest testing.",
    tech: "React | JavaScript | Html | CSS | Bootstrap | Redux | Jest | npm",
    imageSrc: "/static/gelato.png",
    codeLink: "https://github.com/kimmykokonut/inventory-tracker-cra-redux",
  },
  {
    title: "Not Wordle",
    websiteLink: "https://kimmykokonut.github.io/word-puzzle/",
    description:
      "A hangman-style word puzzle with 3 play modes built in 16 hours as a pair project to learn React and Redux.",
    tech: "React | JavaScript | Html | CSS | Redux",
    imageSrc: "/static/puzzle.png",
    codeLink: "https://github.com/kimmykokonut/word-puzzle",
  },
  {
    title: "Currency Exchanger",
    websiteLink: "https://kimmykokonut.github.io/currency-exchanger",
    description:
      "A code review for Epicodus bootcamp where I utilized skills of API calls to allow a user to convert 16 different currencies and receive current currency rate and amount in chosen country's currency.",
    tech: "JavaScript | HTML | CSS | npm | Bootstrap | API",
    imageSrc: "/static/currency.png",
    codeLink: "https://github.com/kimmykokonut/currency-exchanger",
  },
];
