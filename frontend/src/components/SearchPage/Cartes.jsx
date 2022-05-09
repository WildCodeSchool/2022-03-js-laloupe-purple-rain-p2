import LightThemeContext from "@contexts/LightTheme";
import { useContext } from "react";
import "./Cartes.scss";

const Cards = ({ setInfoPopup, ...item }) => {
  const { lightTheme } = useContext(LightThemeContext);

  const handleNeonColor = () => {
    if (item.strCategory === "Cocktail") {
      if (lightTheme) {
        return "Carte Bleue light";
      }
      return "Carte Bleue";
    }
    if (item.strCategory === "Ordinary Drink") {
      if (lightTheme) {
        return "Carte Rose light";
      }
      return "Carte Rose";
    }

    if (item.strCategory === "Other/Unknown") {
      if (lightTheme) {
        return "Carte Orange light";
      }
      return "Carte Orange";
    }
    if (lightTheme) {
      return "Carte Verte light";
    }
    return "Carte Verte";
  };

  const handleCardClick = () => {
    setInfoPopup(item);
  };

  return (
    <button
      type="button"
      className={handleNeonColor()}
      onClick={handleCardClick}
    >
      <h4>{item.strDrink}</h4>
      <img
        className="drinkImage"
        src={item.strDrinkThumb}
        alt={item.strDrink}
      />
      <p>{item.strAlcoholic}</p>
      <h5>{item.strCategory}</h5>
    </button>
  );
};

export default Cards;
