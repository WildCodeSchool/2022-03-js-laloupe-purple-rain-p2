import "./Header.scss";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="mobile">
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
