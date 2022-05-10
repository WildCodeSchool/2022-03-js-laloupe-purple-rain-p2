import { NavLink } from "react-router-dom";
import LightThemeContext from "@contexts/LightTheme";
import "./NavMenu.scss";
import { useEffect, useContext } from "react";
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

  const handleMenuClose = (e) => {
    if (e.target.id !== "navMenu") {
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  const handleLightTheme = () => {
    if (!lightTheme) {
      localStorage.setItem("lightTheme", "true");
      setLightTheme(true);
    } else if (lightTheme) {
      localStorage.setItem("lightTheme", "false");
      setLightTheme(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleMenuClose);
    return () => document.removeEventListener("click", handleMenuClose);
  });

  return (
    <nav id="navMenu" className={handleNavMobile()}>
      <div className="mobileNav">
        <button
          type="button"
          className={lightTheme ? "themeButton" : "themeButton sliderSwitch"}
          onClick={() => handleLightTheme()}
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
            onClick={() => handleLightTheme()}
          >
            <div className="themeButtonSlider" />
          </button>
          <div className="leftButtons">
            <NavLink
              to="/"
              className={(nav) => handleNeonDesktop(nav)}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              HOMEPAGE
            </NavLink>
            <NavLink
              to="/search"
              className={(nav) => handleNeonDesktop(nav)}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              SEARCH
            </NavLink>
          </div>
          <NavLink
            to="/"
            className="midLogo"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <Logo isScrolled={isScrolled} />
          </NavLink>
          <div className="rightButtons">
            <NavLink
              to="/history"
              className={(nav) => handleNeonDesktop(nav)}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              HISTORY
            </NavLink>
            <NavLink
              to="/jobs"
              className={(nav) => handleNeonDesktop(nav)}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              JOBS
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={lightTheme ? "desktop light" : "desktop"}>
          <button
            type="button"
            className={lightTheme ? "themeButton" : "themeButton sliderSwitch"}
            onClick={() => handleLightTheme()}
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
