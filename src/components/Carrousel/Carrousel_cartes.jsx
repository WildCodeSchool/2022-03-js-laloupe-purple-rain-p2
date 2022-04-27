import "./Carrousel_cartes.scss";

export function Cards({ strDrink, strCategory, strAlcoholic, strDrinkThumb }) {
  const handleNeonColor = () => {
    if (strCategory === "Cocktail") {
      return "Carte Bleue";
    }
    if (strCategory === "Ordinary Drink") {
      return "Carte Rose";
    }

    if (strCategory === "Other/Unknown") {
      return "Carte Orange";
    }
    return "Carte Verte";
  };

  const handleCardClick = () => {
    // console.log("Card has been clicked");
  };

  return (
    <button
      type="button"
      className={handleNeonColor()}
      onClick={handleCardClick}
    >
      <h4>{strDrink}</h4>
      <img className="drinkImage" src={strDrinkThumb} alt={strDrink} />
      <p>{strAlcoholic}</p>
      <h5>{strCategory}</h5>
    </button>
  );
}

export function CYC() {
  return <h1>Choose your cocktail</h1>;
}
