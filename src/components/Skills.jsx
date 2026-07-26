function Skills({ skills }) {
  return <section className="section skills-section" id="skills"><p className="eyebrow">SKILLS PREVIEW</p><h2>Tools I&apos;m learning with.</h2><div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>;
}
export default Skills;
