function About({ college, course }) {
  return <section className="section about-section" id="about"><p className="eyebrow">A LITTLE ABOUT ME</p><div><h2>I like the sweet spot where logic meets visual clarity.</h2><p>I’m pursuing <strong>{course}</strong> at <strong>{college}</strong>. I’m building my foundation in modern web development through small, useful projects—always with an eye on responsive design and the people using the product.</p></div></section>;
}
export default About;
