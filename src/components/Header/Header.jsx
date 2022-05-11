import "@components/Header/Header.scss";
import { useState, useEffect, useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = ({ infoPopup }) => {
  const { lightTheme, setLightTheme } = useContext(LightThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState();

  const handleScroll = () => {
    if (window.scrollY > 65 || infoPopup) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className="header">
      <div className="mobile">
        <Logo isScrolled={isScrolled} />
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
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={lightTheme ? "desktop light" : "desktop"}>
        <NavMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;
