import "./AbusAlcool.scss";
import { NavLink } from "react-router-dom";

const AbusAlcool = ({ setShowAgePopup }) => {
  return (
    <section className="agePopupContainer">
      <div className="agePopup">
        <div className="headerAge">
          <h1>ARE YOU OVER 18?</h1>
        </div>
        <div className="footerAge">
          <NavLink
            to="/homepage"
            className="ageButton green"
            onClick={() => setShowAgePopup(false)}
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
