import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;