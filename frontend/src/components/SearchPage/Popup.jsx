import LightThemeContext from "@contexts/LightTheme";
import React, { useEffect, useContext } from "react";
import "./Popup.scss";

function Popup({ infoPopup, setInfoPopup }) {
  const { lightTheme } = useContext(LightThemeContext);
  // console.log(infoPopup);

  const recette = [
    {
      ingredient: infoPopup.strIngredient1,
      measure: infoPopup.strMeasure1,
    },
    {
      ingredient: infoPopup.strIngredient2,
      measure: infoPopup.strMeasure2,
    },
    {
      ingredient: infoPopup.strIngredient3,
      measure: infoPopup.strMeasure3,
    },
    {
      ingredient: infoPopup.strIngredient4,
      measure: infoPopup.strMeasure4,
    },
    {
      ingredient: infoPopup.strIngredient5,
      measure: infoPopup.strMeasure5,
    },
    {
      ingredient: infoPopup.strIngredient6,
      measure: infoPopup.strMeasure6,
    },
    {
      ingredient: infoPopup.strIngredient7,
      measure: infoPopup.strMeasure7,
    },
    {
      ingredient: infoPopup.strIngredient8,
      measure: infoPopup.strMeasure8,
    },
    {
      ingredient: infoPopup.strIngredient9,
      measure: infoPopup.strMeasure9,
    },
    {
      ingredient: infoPopup.strIngredient10,
      measure: infoPopup.strMeasure10,
    },
    {
      ingredient: infoPopup.strIngredient11,
      measure: infoPopup.strMeasure11,
    },
    {
      ingredient: infoPopup.strIngredient12,
      measure: infoPopup.strMeasure12,
    },
    {
      ingredient: infoPopup.strIngredient13,
      measure: infoPopup.strMeasure13,
    },
    {
      ingredient: infoPopup.strIngredient14,
      measure: infoPopup.strMeasure14,
    },
    {
      ingredient: infoPopup.strIngredient15,
      measure: infoPopup.strMeasure15,
    },
  ];

  useEffect(() => {
    // console.log(recette);
  });
  return (
    <div className="popup">
      <div className={lightTheme ? "popup-inner light" : "popup-inner"}>
        <button
          type="button"
          className="close-btn"
          onClick={() => setInfoPopup(null)}
        >
          X
        </button>
        <div className="topContainer">
          <h2 className="cocktail-name">{infoPopup.strDrink}</h2>
          <img
            className="cocktail-img"
            src={infoPopup.strDrinkThumb}
            alt={infoPopup.strDrink}
          />
          <h4 className="cocktail-category">{infoPopup.strCategory}</h4>
        </div>

        <div className="mainContainer">
          <div className="scrollContainer">
            <p className="info-cocktails">
              {infoPopup.strInstructions}
              <ul className="inst-ingr">
                {recette
                  .filter(
                    (item) => item.ingredient !== null && item.ingredient !== ""
                  )
                  .map((item) => {
                    return (
                      <li key={item.ingredient}>
                        {item.measure} of {item.ingredient}
                      </li>
                    );
                  })}
              </ul>
            </p>
          </div>
          <p className="disclaimer">
            Alcohol abuse is dangerous for your health.
          </p>
        </div>
      </div>

      <div
        className={
          lightTheme ? "popup-inner desktop light " : "popup-inner desktop"
        }
      >
        <button
          type="button"
          className="close-btn"
          onClick={() => setInfoPopup(null)}
        >
          X
        </button>
        <div className="topContainer">
          <h2 className="cocktail-name">{infoPopup.strDrink}</h2>
          <h4 className="cocktail-category">{infoPopup.strCategory}</h4>
        </div>
        <img
          className="cocktail-img"
          src={infoPopup.strDrinkThumb}
          alt={infoPopup.strDrink}
        />

        <div className="mainContainer">
          <div className="scrollContainer">
            <p className="info-cocktails">
              {infoPopup.strInstructions}
              <ul className="inst-ingr">
                {recette
                  .filter(
                    (item) => item.ingredient !== null && item.ingredient !== ""
                  )
                  .map((item) => {
                    return (
                      <li key={item.ingredient}>
                        {item.measure} of {item.ingredient}
                      </li>
                    );
                  })}
              </ul>
            </p>
          </div>
          <p className="disclaimer">
            Alcohol abuse is dangerous for your health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
