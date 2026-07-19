import { useState } from "react";
import Projects from "../components/Projects";

function ProjectsPage() {
  const [showProjects, setShowProjects] = useState(true);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.",
    },
    {
      title: "Calculator App",
      desc: "Calculator using HTML, CSS and JavaScript.",
    },
    {
      title: "Student Management",
      desc: "Simple student management interface.",
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">My Projects</h1>

      <button
        className="toggle-btn"
        onClick={() => setShowProjects(!showProjects)}
      >
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && <Projects projects={projects} />}
    </div>
  );
}

export default ProjectsPage;