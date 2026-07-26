import { Link, NavLink } from "react-router-dom";

function Header({ name, role }) {
  return (
    <header className="header">
      <Link className="brand" to="/" aria-label={`${name} home`}>
        <span className="brand-mark">DP</span>
        <span><strong>{name}</strong><small>{role}</small></span>
      </Link>
      <nav className="header-nav" aria-label="Primary navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
