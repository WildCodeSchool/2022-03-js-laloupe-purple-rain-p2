import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cards from "@components/SearchPage/Cartes";
import "@components/SearchPage/SearchWindow.scss";
import LightThemeContext from "@contexts/LightTheme";

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
];

const letterBar = () => {
  const response = [];
  for (let i = 65; i !== 91; i++) {
    response.push(String.fromCharCode(i));
  }
  return response;
};

const SearchWindow = ({ setInfoPopup }) => {
  const [searchField, setSearchField] = useState(""); // Search field input value
  const [cocktailList, setCocktailList] = useState(cocktailDataRaw); // Actual list of drinks
  const [numberFiltered, setNumberFiltered] = useState(false); // Drinks names starts by a number
  const [categoryFiltered, setCategoryFiltered] = useState(false); // Drinks category
  const [currentLetter, setCurrentLetter] = useState(""); // Current filter by letter
  const [filtered, setFiltered] = useState(false); // Is there any filter active ?
  const { lightTheme } = useContext(LightThemeContext);

  const [maxItem, setMaxItem] = useState(10);
  const [minItem, setMinItem] = useState(0);

  // Goes to "first page" by setting array offset to 0
  const firstPage = () => {
    setMinItem(0);
    setMaxItem(10);
  };
  // Goes to "last page" by setting array offset to array.length
  const lastPage = () => {
    setMinItem(cocktailList.length - 10);
    setMaxItem(cocktailList.length);
  };
  // Offsets display of array by -10 after checking if possible (first page won't offset)
  const prevPage = () => {
    if (minItem <= 10) {
      setMinItem(0);
      setMaxItem(10);
    } else {
      setMinItem(minItem - 10);
      setMaxItem(maxItem - 10);
    }
  };
  // Offsets display of array by +10 after checking if possible (last page won't offset)
  const nextPage = () => {
    if (maxItem >= cocktailList.length - (cocktailList.length % 10)) {
      setMinItem(cocktailList.length - 10);
      setMaxItem(cocktailList.length);
    } else {
      setMinItem(minItem + 10);
      setMaxItem(maxItem + 10);
    }
  };

  // Fetches all drinks from API using "?s=" without any parameters, kinda weird ut it works
  async function getAllDrinks() {
    const response = await axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=")
      .then((drinks) => drinks.data.drinks)
      .catch((err) => {
        console.error(err);
      });

    if (response) {
      firstPage();
      return response;
    }
    return [];
  }

  // Fetches the whole drink lists and apply a filters to keep only the ones with names starting by a number
  const startsWithNumber = () => {
    getAllDrinks().then((data) =>
      setCocktailList(
        data.filter(
          (item) =>
            item.strDrink.charCodeAt(0) >= 48 &&
            item.strDrink.charCodeAt(0) <= 57
        )
      )
    );
    setNumberFiltered(true);
    setFiltered(true);
  };

  // Fetches API with "?f=" parameter to recover only drinks starting with the specified letter
  async function getDrinkByLetter(letter) {
    const response = await axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/search.php", {
        params: { f: letter },
      })
      .then((drinks) => drinks.data.drinks)
      .catch((err) => {
        console.error(err);
      });

    if (response) {
      firstPage();
      setFiltered(true);
      return response;
    }
    return [];
  }

  // Toggles search list drop down menu
  const handleFilterMenus = (category) => {
    document.querySelector(`.searchList ${category}`).classList.toggle("hide");
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the category
  const getDrinkByCategory = (category, catClass) => {
    document.querySelector(`.searchList ${catClass}`).classList.toggle("hide");
    getAllDrinks().then((data) =>
      setCocktailList(data.filter((item) => item.strCategory === category))
    );
    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the alcohol type
  const getDrinkByAlcohol = (alcohol, alcClass) => {
    document.querySelector(`.searchList ${alcClass}`).classList.toggle("hide");
    getAllDrinks().then((data) =>
      setCocktailList(data.filter((item) => item.strAlcoholic === alcohol))
    );
    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the glass type
  const getDrinkByGlass = (glass, glassClass) => {
    document
      .querySelector(`.searchList ${glassClass}`)
      .classList.toggle("hide");
    getAllDrinks().then((data) =>
      setCocktailList(data.filter((item) => item.strGlass === glass))
    );
    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Resets filters to display all drinks
  const resetFiltersStatus = () => {
    if (currentLetter !== "") {
      setCurrentLetter("");
    }
    if (numberFiltered) {
      setNumberFiltered(false);
    }
    if (categoryFiltered) {
      setCategoryFiltered(false);
    }
    setFiltered(false);
    getAllDrinks().then((data) => setCocktailList(data));
  };

  // Checks filtering state and handles letter filtering requests
  useEffect(() => {
    if (
      currentLetter === "" &&
      numberFiltered === false &&
      categoryFiltered === false
    ) {
      setFiltered(false);
    } else {
      setFiltered(true);
    }

    if (
      currentLetter === "" &&
      numberFiltered === false &&
      categoryFiltered === false
    ) {
      getAllDrinks().then((data) => setCocktailList(data));
    } else if (currentLetter !== "") {
      getDrinkByLetter(currentLetter).then((data) => setCocktailList(data));
    }
  }, [currentLetter, numberFiltered]);

  return (
    <section
      className={lightTheme ? "searchContainer light" : "searchContainer"}
    >
      <div className={lightTheme ? "searchBar light" : "searchBar"}>
        <ul className="searchList">
          <li>
            <button
              type="button"
              onClick={() => handleFilterMenus(".categories")}
            >
              Categories
            </button>
            <ul className="categories hide">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByCategory("Ordinary Drink", ".categories")
                  }
                >
                  Ordinary Drinks
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByCategory("Cocktail", ".categories")}
                >
                  Cocktails
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByCategory("Shake", ".categories")}
                >
                  Shakes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByCategory("Other/Unknown", ".categories")
                  }
                >
                  Other/Unknown
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByCategory("Cocoa", ".categories")}
                >
                  Cocoa
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByCategory("Shot", ".categories")}
                >
                  Shots
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByCategory("Coffee / Tea", ".categories")
                  }
                >
                  Coffe / Tea
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByCategory("Homemade Liqueur", ".categories")
                  }
                >
                  Homemade Liqueur
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByCategory("Punch / Party Drink", ".categories")
                  }
                >
                  Punch / Party Drinks
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByCategory("Beer", ".categories")}
                >
                  Beers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByCategory("Soft Drink", ".categories")
                  }
                >
                  Soft Drinks
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleFilterMenus(".alcohols")}
            >
              Alcohol
            </button>
            <ul className="alcohols hide">
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByAlcohol("Alcoholic", ".alcohols")}
                >
                  Alcoholic
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByAlcohol("Non alcoholic", ".alcohols")
                  }
                >
                  Non alcoholic
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByAlcohol("Optional alcohol", ".alcohols")
                  }
                >
                  Optional alcohol
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" onClick=".ingredients">
              Ingredients
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleFilterMenus(".glassType")}
            >
              Glass Type
            </button>
          </li>
          <li className="inputList">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchField(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <div className={lightTheme ? "searchContent light" : "searchContent"}>
        <ul className="letterBar">
          <p className="counter">{cocktailList.length} results</p>
          <button
            type="button"
            className={filtered ? "rmFilters" : "hide"}
            onClick={() => resetFiltersStatus()}
          >
            Remove Filters
          </button>
          {letterBar().map((letter) => {
            return (
              <button
                type="button"
                onClick={() => setCurrentLetter(letter)}
                key={letter}
              >
                {letter} |
              </button>
            );
          })}
          <button type="button" onClick={() => startsWithNumber()}>
            0-9
          </button>
        </ul>
        <ul className="pageBar">
          <button type="button" onClick={() => firstPage()}>{`<!`}</button>
          <button type="button" onClick={() => prevPage()}>{`<-`}</button>
          <button type="button" onClick={() => nextPage()}>{`->`}</button>
          <button type="button" onClick={() => lastPage()}>{`!>`}</button>
        </ul>

        <div className="cardsContainer">
          {cocktailList
            .filter((item) =>
              item.strDrink.toLowerCase().includes(searchField.toLowerCase())
            )
            .slice(minItem, maxItem)
            .map((item) => {
              return (
                <Cards
                  {...item}
                  key={item.idDrink}
                  setInfoPopup={setInfoPopup}
                />
              );
            })}
        </div>
        <ul className="pageBar">
          <button type="button" onClick={() => firstPage()}>{`<!`}</button>
          <button type="button" onClick={() => prevPage()}>{`<-`}</button>
          <button type="button" onClick={() => nextPage()}>{`->`}</button>
          <button type="button" onClick={() => lastPage()}>{`!>`}</button>
        </ul>
      </div>
    </section>
  );
};

export default SearchWindow;
