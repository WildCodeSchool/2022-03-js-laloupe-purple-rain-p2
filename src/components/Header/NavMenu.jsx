import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavMenu.scss";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="navMenu">
      {isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navButton translateLeft rotate90"
        >
          <div className="menuLogoBars cross"></div>
          <div className="menuLogoBars crossInverted"></div>
          <div className="menuLogoBars hide"></div>
        </button>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)} className="navButton">
          <div className="menuLogoBars"></div>
          <div className="menuLogoBars"></div>
          <div className="menuLogoBars"></div>
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
    </nav>
  );
};

export default NavMenu;
