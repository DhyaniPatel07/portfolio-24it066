function Projects({ projects }) {
  return <div className="project-container">{projects.map((project) => <article className="project-card" key={project.title}><p className="project-number">{project.number}</p><h3>{project.title}</h3><p>{project.desc}</p><span>{project.stack}</span></article>)}</div>;
}
export default Projects;
