import "./AbusAlcool.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";

const AbusAlcool = ({ handleAgeCheck }) => {
  const { lightTheme, setLightTheme } = useContext(LightThemeContext);

  const handleLightTheme = () => {
    if (!lightTheme) {
      localStorage.setItem("lightTheme", "true");
      setLightTheme(true);
    } else if (lightTheme) {
      localStorage.setItem("lightTheme", "false");
      setLightTheme(false);
    }
  };

  return (
    <section className="agePopupContainer">
      <div className={lightTheme ? "agePopup light" : "agePopup"}>
        <button
          type="button"
          className={lightTheme ? "themeButton" : "themeButton sliderSwitch"}
          onClick={() => handleLightTheme()}
        >
          <div className="themeButtonSlider" />
        </button>
        <div className="headerAge">
          <h1>ARE YOU OVER 18?</h1>
        </div>
        <div className="footerAge">
          <NavLink
            to="/homepage"
            className="ageButton green"
            onClick={() => handleAgeCheck(true)}
          >
            YES
          </NavLink>
          <button
            type="button"
            className="ageButton red"
            onClick={() => {
              window.location.href =
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }}
          >
            NO
          </button>
        </div>
        <p>ALCOHOL ABUSE IS DANGEROUS FOR HEALTH</p>
      </div>
    </section>
  );
};

export default AbusAlcool;
