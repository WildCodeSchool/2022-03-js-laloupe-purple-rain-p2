import { NavLink } from "react-router-dom";
import LightThemeContext from "@contexts/LightTheme";
import "./NavMenu.scss";
import { useContext } from "react";
import Logo from "./Logo";

const NavMenu = ({ isScrolled, isOpen, setIsOpen }) => {
  const { lightTheme } = useContext(LightThemeContext);

  const handleNeon = (nav) => {
    if (nav.isActive) {
      if (lightTheme) {
        return "navLight activeLight";
      }
      return "nav active";
    }
    if (lightTheme) {
      return "navLight";
    }
    return "nav";
  };

  return (
    <nav className={isOpen ? "navMenu opened" : "navMenu"}>
      <div className="mobileNav">
        <ul className="navList">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/homepage"
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
              to="/homepage"
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
          <NavLink to="/homepage" className="midLogo">
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
            <NavLink to="/homepage" className={(nav) => handleNeon(nav)}>
              HOMEPAGE
            </NavLink>
            <NavLink to="/search" className={(nav) => handleNeon(nav)}>
              SEARCH
            </NavLink>
          </div>
          <NavLink to="/homepage" className="midLogo">
            <Logo isScrolled={isScrolled} />
          </NavLink>
          <div className="rightButtons">
            <NavLink to="/history" className={(nav) => handleNeon(nav)}>
              HISTORY
            </NavLink>
            <NavLink to="/jobs" className={(nav) => handleNeon(nav)}>
              JOBS
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
