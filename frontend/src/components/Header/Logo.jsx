import "@assets/fonts/BTTF.ttf";
import "./Logo.css";

const Logo = ({ isScrolled }) => {
  if (isScrolled) {
    return (
      <div className="logo-container fontBTTF scrolled">
        <div className="logo">
          <span className="top-line-scrolled">BACK{"<"} </span>
          <span className="bottom-line-scrolled margin-8">& BAR</span>
        </div>
        <div className="logo">
          <span className="gradient-text">BACK{"<"} </span>
          <span className="margin-8 gradient-text">& BAR</span>
        </div>
      </div>
    );
  }
  return (
    <div className="logo-container fontBTTF">
      <div className="logo">
        <span className="top-line flicker">BACK{"<"} </span>
        <span className="bottom-line flicker margin-8">& BAR</span>
      </div>
      <div className="logo">
        <span className="gradient-text">BACK{"<"} </span>
        <span className="margin-8 gradient-text">& BAR</span>
      </div>
    </div>
  );
};

export default Logo;
