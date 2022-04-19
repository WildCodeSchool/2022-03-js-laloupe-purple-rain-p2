import "@assets/fonts/BTTF.ttf";
import { useState } from "react";
import "./FooterLogo.css";

const FooterLogo = ({ isMobile }) => {
  if (isMobile) {
    return (
      <div className="logo-container-footer fontBTTF mobile">
        <div className="logo-footer">
          <span className="top-line flicker">BACK{"<"} </span>
          <span className="bottom-line flicker margin-8">& BAR</span>
        </div>
        <div className="logo-footer">
          <span className="gradient-text">BACK{"<"} </span>
          <span className="margin-8 gradient-text">& BAR</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="logo-container-footer fontBTTF">
        <div className="logo-footer">
          <span className="top-line flicker">BACK{"<"} </span>
          <span className="bottom-line flicker margin-8">& BAR</span>
        </div>
        <div className="logo-footer">
          <span className="gradient-text">BACK{"<"} </span>
          <span className="margin-8 gradient-text">& BAR</span>
        </div>
      </div>
    );
  }
};

export default FooterLogo;
