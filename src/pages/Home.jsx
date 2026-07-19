import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <>
      <About college="Charusat University" course="B.Tech IT" />
      <Skills skills={skills} />
      <Footer name="Dhyani Patel" />
    </>
  );
}

export default Home;