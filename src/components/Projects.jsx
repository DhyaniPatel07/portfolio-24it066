function Projects({ projects }) {

  return (

    <section className="section" id="projects">

      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <button>View Project</button>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;