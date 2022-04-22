import { useEffect, useState } from "react";
import axios from "axios";
import { Cards } from "./Cartes";
import "@components/SearchPage/SearchWindow.scss";

const cocktailDataRaw = [
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
  {
    strDrink: "Bacardi Cocktail",
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strGlass: "Cocktail glass",
    strInstructions: "Shake together with ice. Strain into glass and serve.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/n433t21504348259.jpg",
    strIngredient1: "Light rum",
    strIngredient2: "Lime juice",
    strIngredient3: "Sugar syrup",
    strIngredient4: "Grenadine",
    strIngredient5: "",
  },
  {
    strDrink: "Holloween Punch",
    strCategory: "Punch / Party Drink",
    strAlcoholic: "Non alcoholic",
    strGlass: "Punch bowl",
    strInstructions:
      'Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still "bubbles" in it in the form of sherbet scoops. Looks horrible, tastes just fine.',
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg",
    strIngredient1: "Grape juice",
    strIngredient2: "Carbonated soft drink",
    strIngredient3: "Sherbet",
    strIngredient4: "Sherbet",
    strIngredient5: "",
  },
  {
    strDrink: "Fruit Shake",
    strCategory: "Other/Unknown",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball Glass",
    strInstructions: "Blend til smooth.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg",
    strIngredient1: "Yoghurt",
    strIngredient2: "Banana",
    strIngredient3: "Orange juice",
    strIngredient4: "Fruit",
    strIngredient5: "Ice",
  },
];

const letterBar = () => {
  const response = [];
  for (let i = 65; i !== 91; i + 1) {
    response.push(String.fromCharCode(i));
  }
  return response;
};

const SearchWindow = () => {
  const [cocktailList, setCocktailList] = useState(cocktailDataRaw);
  const [searchField, setSearchField] = useState("");
  const [currentLetter, setCurrentLetter] = useState("a");
  const [maxItem, setMaxItem] = useState(10);
  const [minItem, setMinItem] = useState(0);

  const resetPage = () => {
    setMinItem(0);
    setMaxItem(10);
  };

  const prevPage = () => {
    if (minItem === 0) {
      setMinItem(0);
      setMaxItem(10);
    } else {
      setMinItem(minItem - 10);
      setMaxItem(maxItem - 10);
    }
  };
  const nextPage = () => {
    if (maxItem === cocktailList.length - (cocktailList.length % 10)) {
      setMinItem(cocktailList.length - 10);
      setMaxItem(cocktailList.length);
    } else {
      setMinItem(minItem + 10);
      setMaxItem(maxItem + 10);
    }
  };

  // const setPageNumber = () => {
  //   let pageNumber = 1;

  //   if (cocktailList.length % 10 === 0) {
  //     console.log("isEven", cocktailList.length);
  //   } else {
  //     console.log("isOdd", cocktailList.length);
  //   }

  //   // console.log(pageNumber);
  //   // return pageNumber;
  // };

  async function getDrinkByLetter(letter) {
    const response = await axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/search.php", {
        params: { f: letter },
      })
      .then((data) => data.data.drinks);

    if (response) {
      // setPageNumber();
      resetPage();
      return response;
    }
    return [];
  }

  useEffect(() => {
    getDrinkByLetter(currentLetter).then((data) => setCocktailList(data));
  }, [currentLetter]);

  /* eslint-disable */
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

      <ul className="letterBar">
        <p className="counter">Cocktails: {cocktailList.length}</p>
        {letterBar().map((letter) => {
          return <li onClick={() => setCurrentLetter(letter)}>{letter}</li>;
        })}
        <li>0-1</li>
      </ul>
      <ul className="pageBar">
        <li onClick={() => prevPage()}>{`<-`}</li>
        <li onClick={() => nextPage()}>{`->`}</li>
      </ul>

      <div className="cardsContainer">
        {cocktailList
          .filter((item) =>
            item.strDrink.toLowerCase().includes(searchField.toLowerCase())
          )
          .slice(minItem, maxItem)
          .map((item) => {
            // eslint-disable-next-line
            return <Cards {...item} />;
          })}
      </div>
      <ul className="pageBar">
        <li onClick={() => prevPage()}>{`<-`}</li>
        <li onClick={() => nextPage()}>{`->`}</li>
      </ul>
    </section>
  );
};

export default SearchWindow;
