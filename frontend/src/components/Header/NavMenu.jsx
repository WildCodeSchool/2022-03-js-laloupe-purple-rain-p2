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

  const handleNavMobile = () => {
    if (isOpen) {
      if (lightTheme) {
        return "navMenu opened light";
      }
      return "navMenu opened";
    }
    if (lightTheme) {
      return "navMenu light";
    }
    return "navMenu";
  };

  return (
    <nav className={handleNavMobile()}>
      <div className="mobileNav">
        <button
          type="button"
          className={lightTheme ? "themeButton" : "themeButton sliderSwitch"}
          onClick={() => setLightTheme(!lightTheme)}
        >
          <div className="themeButtonSlider" />
        </button>
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
          <button
            type="button"
            className={lightTheme ? "themeButton" : "themeButton sliderSwitch"}
            onClick={() => setLightTheme(!lightTheme)}
          >
            <div className="themeButtonSlider" />
          </button>
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
          <button
            type="button"
            className={lightTheme ? "themeButton" : "themeButton sliderSwitch"}
            onClick={() => setLightTheme(!lightTheme)}
          >
            <div className="themeButtonSlider" />
          </button>
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
