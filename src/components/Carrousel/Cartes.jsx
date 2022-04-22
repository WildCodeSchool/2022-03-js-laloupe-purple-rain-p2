import "./Cartes.scss";

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

  return (
    <div className={handleNeonColor()}>
      <h4>{strDrink}</h4>
      <img className="drinkImage" src={strDrinkThumb} alt={strDrink} />
      <p>{strAlcoholic}</p>
      <h5>{strCategory}</h5>
    </div>
  );
}

export function CYC() {
  return <h1>Choose your cocktail</h1>;
}

// export function CardsOff4() {
//   return (
//     <div className="CartesEteintes4">
//       <div className="Carte Orange Off" />
//       <div className="Carte Bleue Off" />
//       <div className="Carte Rose Off" />
//       <div className="Carte Verte Off" />
//     </div>
//   );
// }
