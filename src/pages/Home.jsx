import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  const skills = ["C", "C++", "Java", "Python", "React", "Git & GitHub"];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO · 2026</p>
          <h1>Hi, I&apos;m <em>Dhyani Patel.</em></h1>
          <p className="hero-role">B.Tech Information Technology Student</p>
          <p className="hero-text">I&apos;m a student at CHARUSAT – CSPIT and an aspiring developer who enjoys building useful, accessible web experiences while learning React, Python and data analytics.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/work">View Work <span>↗</span></Link>
            <Link className="text-link" to="/contact">Contact Me →</Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative portrait monogram">
          <div className="sun"></div><div className="portrait">DP</div><p>Building one pixel<br />at a time.</p>
        </div>
      </section>
      <Skills skills={skills} />
      <section className="home-callout">
        <p className="eyebrow">FEATURED PROJECT</p><h2>Multilingual Voice Translation System</h2>
        <p className="featured-copy">Turning spoken words into translated speech through a simple, responsive interface.</p>
        <Link className="button button-light" to="/work">View Details <span>↗</span></Link>
      </section>
      <Footer name="Dhyani Patel" />
    </>
  );
}

export default Home;
