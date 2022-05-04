import React, { useEffect } from "react";
import "./Popup.scss";

function Popup({ infoPopup, setInfoPopup }) {
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
      <div className="popup-inner">
        <button
          type="button"
          className="close-btn"
          onClick={() => setInfoPopup(null)}
        >
          X
        </button>
        <div className="container">
          <div className="cocktail-name">
            <h1>{infoPopup.strDrink}</h1>
          </div>
          <div className="page-cocktails">
            <img
              className="cocktail-img"
              src={infoPopup.strDrinkThumb}
              alt={infoPopup.strDrinkThumb}
            />
            <div className="info-cocktails">
              <h2>{infoPopup.strCategory}</h2>
              <div className="inst-ingr">
                <h4>{infoPopup.strInstructions}</h4>
                <ul>
                  {recette
                    .filter((item) => item.ingredient != null)
                    .map((item) => {
                      return (
                        <li>
                          {item.measure} of {item.ingredient}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="disclaimer">
            <p>Alcohol abuse is dangerous for your bite health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
