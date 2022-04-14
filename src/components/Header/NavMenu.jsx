import { Link } from "react-router-dom";
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
          <li>
            <Link onClick={() => setIsOpen(false)} to="/">
              Homepage
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/history">
              History
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/jobs">
              Jobs
            </Link>
          </li>
        </ul>
      </div>

      {isScrolled ? (
        <div className="desktopScroll">
          <div className="leftButtons">
            <Link to="/">HOMEPAGE</Link>
            <Link to="/search">SEARCH</Link>
          </div>
          <Link to="/" className="midLogo">
            <Logo isScrolled={isScrolled} />
          </Link>
          <div className="rightButtons">
            <Link to="/history">HISTORY</Link>
            <Link to="/jobs">JOBS</Link>
          </div>
        </div>
      ) : (
        <div className="desktop">
          <div className="leftButtons">
            <Link to="/">HOMEPAGE</Link>
            <Link to="/search">SEARCH</Link>
          </div>
          <Link to="/" className="midLogo">
            <Logo isScrolled={isScrolled} />
          </Link>
          <div className="rightButtons">
            <Link to="/history">HISTORY</Link>
            <Link to="/jobs">JOBS</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
