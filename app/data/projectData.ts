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
      "During my job search, I decided to dive into new technologies and frameworks, with a focus on data visualization. I built an application using Chart.js that dynamically displays three interactive charts based on my job application data. The app also includes a form for adding new entries and a fun feature that generates an inspirational quote with each page refresh.  Hosted on Vercel.",
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
      "A full-stack application developed as a capstone project for Epicodus, completed over 200 hours. This app streamlines the field trip registration process for foragers. Users can sign up, register for trips, and access essential resources like packing lists and permits for Pacific Northwest locations. Administrators can create, edit, and manage trips, run lotteries to assign spots, and automate communication with participants. Inspired by my volunteer work with the Oregon Mycological Society, this project enhances trip coordination and fosters a stronger community among members.",
    tech: "React | Typescript | Python | Django | Material UI | PostgreSQL",
    imageSrc: "/static/mycoHome.png",
    codeLink: "https://github.com/kimmykokonut/Capstone",
  },
  {
    title: "Beyond Tipping",
    websiteLink: "https://beyondtipping.onrender.com/",
    description:
      "This team project, built in 4 days at Epicodus, showcases Portland-area restaurants that have adopted a no-tipping model, offering flat prices or service fees. The full-stack app features a list and interactive map of restaurants. I contributed to building the backend, creating API endpoints, connecting the React frontend to the Flask API, and handling the deployment on Render. I also styled the Restaurant List page, added a filter feature, and authored the detailed README documentation.",
    tech: " React | Typescript | Python | Flask | Tailwind CSS | SQLite",
    imageSrc: "/static/tipping.png",
    codeLink: "https://github.com/kimmykokonut/beyondtipping",
  },
  {
    title: "Garden Guardian",
    websiteLink: "https://garden-client.onrender.com/",
    description:
      "Inspired by an unfinished team project from Epicodus, I restructured the database relationships, transitioned from MySQL to PostgreSQL, and revamped the UI by switching from Preact to React with TypeScript, styled using Tailwind. The API allows users to manage garden beds and seeds, create grids, and plant seeds within them. Users can interact with the API through Postman or Swagger (UI is a work in progress).",
    tech: "TypeScript | React | Tailwind | Html | CSS | PostgreSQL | C# | ASP.NET",
    imageSrc: "/static/garden.png",
    codeLink: "https://github.com/kimmykokonut/Garden-guardian",
  },
  {
    title: "The Dump Truck",
    websiteLink: "https://github.com/kimmykokonut/dumpling-client",
    description:
      "My first project built with Django, this WebAPI manages dumpling information, categories, and tags with PostgreSQL integration. Users can register, sign in, view dumpling data, and create, edit, or delete their own entries. I set up admin and user accounts, managed permissions, and am building a React frontend to consume the API. The project also uses dotenv for environment variable management.",
    tech: "TypeScript | React | Python | Django | CSS | PostgreSQL",
    imageSrc: "/static/dumplingapi.png",
    codeLink: "https://github.com/kimmykokonut/dumpling-api",
  },
  {
    title: "Sound Check",
    websiteLink: "https://sound-check.netlify.app/",
    description:
      "A React app that helps users discover local bands, save favorite artists, and connect with others through a live feed. Users can search for concerts, follow artists, and see saved shows in their dashboard. Built in 3 days by a team of five at Epicodus using React, Vite, and Firestore. I integrated the JamBase API, built the 'Who's Coming' page, implemented concert search by city, and handled deployment on Netlify.",
    tech: "React | JavaScript | Html | CSS | Material UI | API",
    imageSrc: "/static/soundcheck.png",
    codeLink: "https://github.com/kimmykokonut/sound-check",
  },
  {
    title: "Inventory Tracker",
    websiteLink: "https://kimmykokonut.github.io/inventory-tracker-cra-redux/",
    description:
      "An 8-hour Epicodus project to refactor a React app with Redux and testing. Users can view flavors, add pails, see details, track servings, and sell pints. Initially built with class components, refactored to functional components for better state management.",
    tech: "React | JavaScript | Html | CSS | Bootstrap | Redux | Jest | npm",
    imageSrc: "/static/gelato.png",
    codeLink: "https://github.com/kimmykokonut/inventory-tracker-cra-redux",
  },
  {
    title: "Not Wordle",
    websiteLink: "https://kimmykokonut.github.io/word-puzzle/",
    description:
      "A React and Redux application for a hangman-style word guessing game, developed in 16 hours as a pair coding project at Epicodus' bootcamp. Users can choose between easy mode, hard mode, or a two-player version. Players guess letters to reveal a hidden word, with limited attempts. The game provides feedback on each guess, displays correctly and incorrectly guessed letters, and shows remaining guesses. The game ends when the word is guessed or attempts run out.",
    tech: "React | JavaScript | Html | CSS | Redux",
    imageSrc: "/static/puzzle.png",
    codeLink: "https://github.com/kimmykokonut/word-puzzle",
  },
  {
    title: "Currency Exchanger",
    websiteLink: "https://kimmykokonut.github.io/currency-exchanger",
    description:
      "A currency exchange application developed for Epicodus bootcamp, built in 8 hours. Users can input a USD amount and convert it to up to 5 different currencies using the Exchange Rate API. The app displays the converted amount and handles errors gracefully, notifying users of any issues with the API or invalid currencies.",
    tech: "JavaScript | HTML | CSS | npm | Bootstrap | API",
    imageSrc: "/static/currency.png",
    codeLink: "https://github.com/kimmykokonut/currency-exchanger",
  },
];
