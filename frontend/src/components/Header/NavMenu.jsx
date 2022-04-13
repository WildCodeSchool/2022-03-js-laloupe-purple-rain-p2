import { Link } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <nav className="navMenu">
      <ul className="navList">
        <li>
          <Link to={"/"}>Homepage</Link>
        </li>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
        <li>
          <Link to={"/history"}>History</Link>
        </li>
        <li>
          <Link to={"/jobs"}>Jobs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
