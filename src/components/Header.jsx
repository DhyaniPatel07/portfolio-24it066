import { Link } from "react-router-dom";

function Header({ name, role }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>{name}</h1>
        <p>{role}</p>
      </div>

      <nav className="header-nav">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;