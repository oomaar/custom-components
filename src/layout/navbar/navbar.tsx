import "./navbar.css";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-nav">
      <div>
        <FaReact className="navbar-nav-logo" />
      </div>
      <ul className="navbar-nav-list">
        <li className="navbar-nav-list-item">
          <Link to={`/dropdown`}>Dropdown</Link>
        </li>
      </ul>
    </nav>
  );
};
