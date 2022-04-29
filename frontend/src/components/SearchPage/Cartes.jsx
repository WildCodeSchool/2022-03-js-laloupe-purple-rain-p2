import "./Cartes.scss";

export function Cards({ setInfoPopup, ...item }) {
  // const [buttonPopup, setButtonPopup] = useState(false);
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
}

export function CYC() {
  return <h1>Choose your cocktail</h1>;
}
