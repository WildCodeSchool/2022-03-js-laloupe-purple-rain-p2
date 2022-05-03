import { NavLink } from "react-router-dom";
import LightThemeContext from "@contexts/LightTheme";
import "./NavMenu.scss";
import { useContext } from "react";
import Logo from "./Logo";

const NavMenu = ({ isScrolled, isOpen, setIsOpen }) => {
  const { lightTheme, setLightTheme } = useContext(LightThemeContext);

  const handleNeonDesktop = (nav) => {
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
        <div className={lightTheme ? "desktopScroll light" : "desktopScroll"}>
          <div className="leftButtons">
            <NavLink to="/" className={(nav) => handleNeonDesktop(nav)}>
              HOMEPAGE
            </NavLink>
            <NavLink to="/search" className={(nav) => handleNeonDesktop(nav)}>
              SEARCH
            </NavLink>
          </div>
          <NavLink to="/" className="midLogo">
            <Logo isScrolled={isScrolled} />
          </NavLink>
          <div className="rightButtons">
            <NavLink to="/history" className={(nav) => handleNeonDesktop(nav)}>
              HISTORY
            </NavLink>
            <NavLink to="/jobs" className={(nav) => handleNeonDesktop(nav)}>
              JOBS
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={lightTheme ? "desktop light" : "desktop"}>
          <div className="leftButtons">
            <NavLink to="/" className={(nav) => handleNeonDesktop(nav)}>
              HOMEPAGE
            </NavLink>
            <NavLink to="/search" className={(nav) => handleNeonDesktop(nav)}>
              SEARCH
            </NavLink>
          </div>
          <NavLink to="/" className="midLogo">
            <Logo isScrolled={isScrolled} />
          </NavLink>
          <div className="rightButtons">
            <NavLink to="/history" className={(nav) => handleNeonDesktop(nav)}>
              HISTORY
            </NavLink>
            <NavLink to="/jobs" className={(nav) => handleNeonDesktop(nav)}>
              JOBS
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
