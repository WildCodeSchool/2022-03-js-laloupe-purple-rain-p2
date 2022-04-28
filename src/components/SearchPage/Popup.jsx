import React from "react";
import "./Popup.scss";

function Popup({infoPopup, setInfoPopup}) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setInfoPopup(null)}>X</button>
        {infoPopup.strDrink}
      </div>
    </div>
  );
}

export default Popup;
