import "@components/Footer/Footer.scss";
import Logo from "@components/Footer/FooterLogo";
import { useState, useEffect, useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import { NavLink } from "react-router-dom";
import Form from "./Form";

const Footer = () => {
  const { lightTheme } = useContext(LightThemeContext);
  const [isMobile, setIsMobile] = useState();
  const handleMobile = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleNeonDesktop = (nav) => {
    if (nav.isActive) {
      if (lightTheme) {
        return "footerNavLight activeLight";
      }
      return "footerNav active";
    }
    if (lightTheme) {
      return "footerNavLight";
    }
    return "footerNav";
  };

  useEffect(() => {
    handleMobile();
    window.addEventListener("resize", handleMobile);
    return () => window.removeEventListener("resize", handleMobile);
  });

  return (
    <footer className={lightTheme ? "footer light" : "footer"}>
      <div className="footerLeft">
        <Logo isMobile={isMobile} />
      </div>
      <div className="footerMid">
        <Form />
      </div>
      <div className="footerRight">
        <ul className="footerNav">
          <NavLink
            to="/"
            className={(nav) => handleNeonDesktop(nav)}
            onClick={() => window.scroll(0, 0)}
          >
            <li>Homepage</li>
          </NavLink>
          <NavLink
            to="/search"
            className={(nav) => handleNeonDesktop(nav)}
            onClick={() => window.scroll(0, 0)}
          >
            <li>Search</li>
          </NavLink>
          <NavLink
            to="/history"
            className={(nav) => handleNeonDesktop(nav)}
            onClick={() => window.scroll(0, 0)}
          >
            <li>History</li>
          </NavLink>
          <NavLink
            to="/jobs"
            className={(nav) => handleNeonDesktop(nav)}
            onClick={() => window.scroll(0, 0)}
          >
            <li>Jobs</li>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
