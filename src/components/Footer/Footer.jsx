import "@components/Footer/Footer.scss";
import Logo from "@components/Footer/FooterLogo";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "./Form";

const Footer = () => {
  const [isMobile, setIsMobile] = useState();
  const handleMobile = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleMobile();
    window.addEventListener("resize", handleMobile);
    return () => window.removeEventListener("resize", handleMobile);
  }, []);

  return (
    <footer className="footer">
      <div className="footerLeft">
        <Logo isMobile={isMobile} />
      </div>
      <div className="footerMid">
        <Form />
      </div>
      <div className="footerRight">
        <ul className="footerNav">
          <NavLink
            to="/homepage"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Homepage</li>
          </NavLink>
          <NavLink
            to="/search"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Search</li>
          </NavLink>
          <NavLink
            to="/history"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>History</li>
          </NavLink>
          <NavLink
            to="/jobs"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Jobs</li>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
