import "@components/Header/Header.scss";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 65) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className="header">
      <div className="mobile">
        <Logo isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
        <NavMenu />
      </div>
      <div className="desktop">
        <NavMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;
