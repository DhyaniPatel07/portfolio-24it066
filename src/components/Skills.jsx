function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;