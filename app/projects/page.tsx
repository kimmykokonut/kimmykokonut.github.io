import Card from "@/components/Card";

const Projects = () => {
  return (
    <section id="projects" role="region" aria-labelledby="projects-heading">
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
      {/* <div className="center-card" id="projects-card"> */}
        <h2 id="projects-heading">Projects</h2>
        <hr />
        <div className="scrolling-wrapper">
          <div className="card">
            <a href="https://myco.onrender.com/">
              <h2>Myco Matrix</h2>
              <br />
              <p>Automated field trip registration and lottery</p>
              <p>React | Typescript | Python | Django | Material UI | PostgreSQL</p>
              <br />
              <img className="project-img" src="./static/mycoList.png" alt="Myco Matrix project trip list page" />
            </a>
            <br />
            <a href="https://myco.onrender.com/" className="button-link">Website</a>
            <a href="https://github.com/kimmykokonut/Capstone" className="button-link">Code</a>
          </div>
          <div className="card">
            <a href="https://myco.onrender.com/">
              <h2>Beyond Tipping</h2>
              <br />
              <p>Find tip-free Portland Restaurants</p>
              <p>React | Typescript | Python | Flask | Tailwind CSS | SQLite</p>
              <br />
              <img className="project-img" src="./static/tipping.png" alt="Beyond tipping homepage screenshot" />
            </a>
            <br />
            <a href="https://github.com/kimmykokonut/beyondtipping" className="button-link">Code</a>
            <br />
            <p style={{ color: 'black' }}>Group Project: I built the flask backend, API endpoints, front end API calls to render
              data to the Restaurant List page</p>
          </div>
          <div className="card">
            <a href="https://garden-client.onrender.com/">
              <h2>Garden Guardian</h2>
              <br />
              <p>A user can create and organize garden data via grids (to come: track yields over time)</p>
              <p>TypeScript | React | Tailwind | Html | CSS | PostgreSQL | C# | ASP.NET</p>
              <br />
              <img className="project-img" src="./static/garden.png" alt="Home page for garden tracker project" />
            </a>
            <br />
            <a href="https://garden-client.onrender.com/" className="button-link">Website</a>
            <a href="https://github.com/kimmykokonut/Garden-guardian" className="button-link">Code</a>
          </div>
          <div className="card">
            <a href="https://dumpling-atlas.netlify.app/dumplings">
              <h2>The Dump Truck</h2>
              <br />
              <p>A user can see, add, edit and delete this work-in-progress dumpling database.</p>
              <p>TypeScript | React | Python | Django | CSS | PostgreSQL</p>
              <br />
              <img className="project-img" src="./static/dumplingapi.png" alt="Json response for dumpling api call" />
            </a>
            <br />
            <a href="https://dumpling-atlas.netlify.app/dumplings" className="button-link">Website</a>
            <a href="https://github.com/kimmykokonut/dumpling-client" className="button-link">Front End Code</a>
            <a href="https://github.com/kimmykokonut/dumpling-api" className="button-link">WebAPI Code</a>
          </div>
          <div className="card">
            <a href="https://sound-check.netlify.app/">
              <h2>Soundcheck</h2>
              <br />
              <p>Find a concert, make a friend</p>
              <p>React | JavaScript | Html | CSS | Material UI | JamBase API</p>
              <br />
              <img className="project-img" src="./static/soundcheck.png"
                alt="Home page for Soundcheck concert project" />
            </a>
            <br />
            <a href="https://sound-check.netlify.app/" className="button-link">Website</a>
            <a href="https://github.com/kimmykokonut/sound-check" className="button-link">Code</a>
            <br />
            <p style={{ color: 'black' }}>Group Project: I wrote the API calls, designed the Who&#39;s Coming page and built the
              location search filter</p>
          </div>
        </div>
      {/* </div> */}
      </Card>
    </section>
  );
};
export default Projects;