import "@assets/fonts/BTTF.ttf";
import "./FooterLogo.css";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";

const FooterLogo = ({ isMobile }) => {
  const { lightTheme } = useContext(LightThemeContext);

  if (isMobile) {
    return (
      <div className="logo-container-footer fontBTTF mobile">
        <div className="logo-footer">
          <span className={lightTheme ? "" : "top-line-footer"}>
            BACK{"<"}{" "}
          </span>
          <span
            className={lightTheme ? " margin-8" : "bottom-line-footer margin-8"}
          >
            & BAR
          </span>
        </div>
        <div className="logo-footer">
          <span className="gradient-text">BACK{"<"} </span>
          <span className="margin-8 gradient-text">& BAR</span>
        </div>
      </div>
    );
  }
  return (
    <div className="logo-container-footer fontBTTF">
      <div className="logo-footer">
        <span className={lightTheme ? "" : "top-line-footer"}>BACK{"<"} </span>
        <span
          className={lightTheme ? " margin-8" : "bottom-line-footer margin-8"}
        >
          & BAR
        </span>
      </div>
      <div className="logo-footer">
        <span className="gradient-text">BACK{"<"} </span>
        <span className="margin-8 gradient-text">& BAR</span>
      </div>
    </div>
  );
};

export default FooterLogo;
