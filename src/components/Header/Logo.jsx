import "@assets/fonts/BTTF.ttf";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import "./Logo.css";

const Logo = ({ isScrolled }) => {
  const { lightTheme } = useContext(LightThemeContext);

  if (isScrolled) {
    return (
      <div className="logo-container fontBTTF scrolled">
        <div className="logo">
          <span className={lightTheme ? "" : "top-line-scrolled"}>
            BACK{"<"}
          </span>
          <span className={lightTheme ? " margin-8" : "bottom-line margin-8"}>
            & BAR
          </span>
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
        <span className={lightTheme ? "" : "top-line"}>BACK{"<"} </span>
        <span className={lightTheme ? " margin-8" : "bottom-line margin-8"}>
          & BAR
        </span>
      </div>
      <div className="logo">
        <span className="gradient-text">BACK{"<"} </span>
        <span className="margin-8 gradient-text">& BAR</span>
      </div>
    </div>
  );
};

export default Logo;
