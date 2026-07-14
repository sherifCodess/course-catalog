import { NavLink } from "react-router";
import "./Navbar.css";

// Appears on every page. NavLink (unlike Link) knows when its own
// route is active, so we can style the current tab without tracking
// location state ourselves.
function Navbar() {
  const linkClass = ({ isActive }) =>
    "navbar__tab" + (isActive ? " navbar__tab--active" : "");

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo" end>
          <span className="navbar__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="navbar__filename">
            techyjaunt<span className="navbar__ext">/courses.jsx</span>
          </span>
        </NavLink>

        <nav className="navbar__tabs" aria-label="Course categories">
          <NavLink to="/" className={linkClass} end>
            all-courses
          </NavLink>
          <NavLink to="/category/Beginner" className={linkClass}>
            beginner
          </NavLink>
          <NavLink to="/category/Intermediate" className={linkClass}>
            intermediate
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
