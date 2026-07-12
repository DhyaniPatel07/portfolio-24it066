import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git"
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React."
    },
    {
      title: "Calculator App",
      desc: "Calculator using HTML, CSS and JavaScript."
    },
    {
      title: "Student Management",
      desc: "Simple student management interface."
    }
  ];

  return (
    <>
      <Header
        name="Dhyani Patel"
        role="Frontend Developer | React Learner"
      />

      <About
        college="Charusat University"
        course="B.Tech IT"
      />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <Contact />

      <Footer name="Dhyani Patel" />
    </>
  );
}

export default App;