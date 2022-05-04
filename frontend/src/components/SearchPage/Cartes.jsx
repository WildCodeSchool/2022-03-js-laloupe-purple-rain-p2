import "./Cartes.scss";

const Cards = ({ setInfoPopup, ...item }) => {
  const handleNeonColor = () => {
    if (item.strCategory === "Cocktail") {
      return "Carte Bleue";
    }
    if (item.strCategory === "Ordinary Drink") {
      return "Carte Rose";
    }

    if (item.strCategory === "Other/Unknown") {
      return "Carte Orange";
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
