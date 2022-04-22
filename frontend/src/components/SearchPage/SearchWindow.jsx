import { Cards } from "@components/Carrousel/Cartes";
import "@components/SearchPage/SearchWindow.scss";
import { useState } from "react";

const cocktailData = [
  {
    strDrink: "Screaming Orgasm",
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strGlass: "Cocktail glass",
    strInstructions:
      "Pour first vodka, then Bailey's, then Kahlua into a cocktail glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/x894cs1504388670.jpg",
    strIngredient1: "Vodka",
    strIngredient2: "Baileys irish cream",
    strIngredient3: "Kahlua",
    strIngredient4: "",
    strIngredient5: "",
  },
  {
    strDrink: "Gin Lemon",
    strCategory: "Cocktail",
    strAlcoholic: "Alcoholic",
    strGlass: "Highball glass",
    strInstructions:
      "For the preparation of the gin lemon you will not need the shaker. Fill the tumbler with ice, pour the gin and lemonade over it. Gently mix and decorate with a slice of lemon. Those who prefer can also add a few mint leaves. Your gin lemon is ready to be served.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/yhzvk91643821739.jpg",
    strIngredient1: "Gin",
    strIngredient2: "Lemon Juice",
    strIngredient3: "Lemon Peel",
    strIngredient4: "Ice",
    strIngredient5: "",
  },
  {
    strDrink: "Whitecap Margarita",
    strCategory: "Other/Unknown",
    strAlcoholic: "Alcoholic",
    strGlass: "Margarita/Coupette glass",
    strInstructions:
      "Place all ingredients in a blender and blend until smooth. This makes one drink.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
    strIngredient1: "Ice",
    strIngredient2: "Tequila",
    strIngredient3: "Cream of coconut",
    strIngredient4: "Lime juice",
    strIngredient5: "",
  },
  {
    strDrink: "Spanish chocolate",
    strCategory: "Cocoa",
    strAlcoholic: "Non alcoholic",
    strGlass: "Coffee mug",
    strInstructions:
      "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg",
    strIngredient1: "Milk",
    strIngredient2: "Chocolate",
    strIngredient3: "Cinnamon",
    strIngredient4: "Egg yolk",
    strIngredient5: "",
  },
];

const SearchWindow = () => {
  const [searchField, setSearchField] = useState("");
  // console.log(searchField);

  return (
    <section className="searchContainer">
      <div className="searchBar">
        <ul className="searchList">
          <li>Cocktail Type</li>
          <li>Alcohol</li>
          <li>Ingredients</li>
          <li>Glass Type</li>
          <li className="inputList">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchField(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <div className="cardsContainer">
        {cocktailData
          .filter((item) => item.strDrink.toLowerCase().includes(searchField))
          .map((item) => {
            return (
              <Cards { ...cocktailData } />
            );
          })}

        <span className="card" />
        <span className="card" />
        <span className="card" />
      </div>
    </section>
  );
};

export default SearchWindow;
