import "@assets/fonts/BTTF.ttf";
import { useState } from "react";
import "./Logo.css";

const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="logo-container fontBTTF">
      <div className="logo">
        <span className="top-line flicker">BACK{"<"} </span>
        <span className="bottom-line margin-8 flicker">& BAR</span>
      </div>
      <div className="logo">
        <span className="gradient-text blue-border">BACK{"<"} </span>
        <span className="margin-8 gradient-text blue-border">& BAR</span>
      </div>
    </div>
  );
};

export default Logo;
