function About({ college, course }) {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>

      <p>
        I am pursuing <strong>{course}</strong> at
        <strong> {college}</strong>. I enjoy learning modern web
        technologies and building responsive applications using React.
      </p>
    </section>
  );
}

export default About;