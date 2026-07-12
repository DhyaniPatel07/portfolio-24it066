function Header({ name, role }) {
  return (
    <>
      <nav className="navbar">

        <h2>{name}</h2>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      <section className="hero">

        <h1>Hi, I'm {name}</h1>

        <h3>{role}</h3>

        <p>
          Passionate about building responsive websites using React.
        </p>

        <div className="buttons">
          <button>Download Resume</button>
          <button className="outline">Contact Me</button>
        </div>

      </section>
    </>
  );
}

export default Header;