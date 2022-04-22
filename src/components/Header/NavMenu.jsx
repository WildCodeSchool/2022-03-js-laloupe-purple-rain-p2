import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavMenu.scss";
import Logo from "./Logo";

const NavMenu = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navMenu">
      <div className="mobile">
        {isOpen ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="navButton rotate90"
          >
            <span className="menuLogoBars cross" />
            <span className="menuLogoBars crossInverted" />
            <span className="menuLogoBars hide" />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="navButton"
          >
            <span className="menuLogoBars" />
            <span className="menuLogoBars" />
            <span className="menuLogoBars" />
          </button>
        )}

        <ul className={`navList ${isOpen && "opened"}`}>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Homepage</li>
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/search"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Search</li>
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/history"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>History</li>
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/jobs"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Jobs</li>
          </NavLink>
        </ul>
      </div>

      {isScrolled ? (
        <div className="desktopScroll">
          <div className="leftButtons">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              HOMEPAGE
            </NavLink>
            <NavLink
              to="/search"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              SEARCH
            </NavLink>
          </div>
          <NavLink to="/" className="midLogo">
            <Logo isScrolled={isScrolled} />
          </NavLink>
          <div className="rightButtons">
            <NavLink
              to="/history"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              HISTORY
            </NavLink>
            <NavLink
              to="/jobs"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              JOBS
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="desktop">
          <div className="leftButtons">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              HOMEPAGE
            </NavLink>
            <NavLink
              to="/search"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              SEARCH
            </NavLink>
          </div>
          <NavLink to="/" className="midLogo">
            <Logo isScrolled={isScrolled} />
          </NavLink>
          <div className="rightButtons">
            <NavLink
              to="/history"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              HISTORY
            </NavLink>
            <NavLink
              to="/jobs"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              JOBS
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
