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
    title: "Myco Matrix",
    websiteLink: "https://myco.onrender.com/",
    description: "Automated field trip registration and lottery",
    tech: "React | Typescript | Python | Django | Material UI | PostgreSQL",
    imageSrc: "/static/mycoList.png",
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
];