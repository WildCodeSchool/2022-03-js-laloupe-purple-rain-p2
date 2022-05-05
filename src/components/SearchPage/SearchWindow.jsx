import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cards from "@components/SearchPage/Cartes";
import "@components/SearchPage/SearchWindow.scss";
import LightThemeContext from "@contexts/LightTheme";

const cocktailDataRaw = [
  {
    strDrink: "Xav'tail",
    strCategory: "Obnoxious drink",
    strAlcoholic: "Alcoholic",
    strGlass: "Wild Glass",
    strInstructions:
      "Fetch the Xavier with extreme caution, you have keep it cool to be able to pour it wildy inside the Wild glass. There is no guarantee the Xavier won't start a livecoding. Be aware that the Xav'tail is a dangerous and unpleasant drink, you might get a strong headache and you might React with Express dreams.",
    strDrinkThumb:
      "https://ca.slack-edge.com/T6SG2QGG2-UHBQ50AV8-7fa84665b54b-512",
    strIngredient1: "Unix",
    strIngredient2: "Slacking",
    strIngredient3: "Patience",
    strIngredient4: "Honda",
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
  const [cocktailList, setCocktailList] = useState(cocktailDataRaw); // Actual list of drinks
  const [searchField, setSearchField] = useState(""); // Search field input value
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
    getAllDrinks().then((data) => {
      data.push(cocktailDataRaw[0]);
      setCocktailList(data.filter((item) => item.strCategory === category));
    });
    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the alcohol type
  const getDrinkByAlcohol = (alcohol, alcClass) => {
    document.querySelector(`.searchList ${alcClass}`).classList.toggle("hide");
    getAllDrinks().then((data) => {
      data.push(cocktailDataRaw[0]);
      setCocktailList(data.filter((item) => item.strAlcoholic === alcohol));
    });
    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the glass type
  const getDrinkByGlass = (glass, glassClass) => {
    document
      .querySelector(`.searchList ${glassClass}`)
      .classList.toggle("hide");
    getAllDrinks().then((data) => {
      data.push(cocktailDataRaw[0]);
      setCocktailList(data.filter((item) => item.strGlass === glass));
    });
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
      getAllDrinks().then((data) => {
        data.push(cocktailDataRaw[0]);
        setCocktailList(data);
      });
    } else if (currentLetter !== "") {
      getDrinkByLetter(currentLetter).then((data) => {
        if (currentLetter === "X") {
          data.push(cocktailDataRaw[0]);
        }
        setCocktailList(data);
      });
    }
  }, [currentLetter, numberFiltered]);

  return (
    <section
      className={lightTheme ? "searchContainer light" : "searchContainer"}
    >
      <div className={lightTheme ? "searchBar light" : "searchBar"}>
        <ul className="searchList">
          {/* Filter by categories */}
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
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByCategory("Obnoxious drink", ".categories")
                  }
                >
                  Obnoxious drinks
                </button>
              </li>
            </ul>
          </li>

          {/* Filter by alcohol */}
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

          {/* Filter by ingredients */}
          <li>
            <button type="button" onClick=".ingredients">
              Ingredients
            </button>
          </li>

          {/* Filter by glass type */}
          <li>
            <button
              type="button"
              onClick={() => handleFilterMenus(".glassType")}
            >
              Glass Type
            </button>
            <ul className="glassType hide">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Highball glass", ".glassType")
                  }
                >
                  Highball glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Cocktail glass", ".glassType")
                  }
                >
                  Cocktail glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Wild Glass", ".glassType")}
                >
                  Wild Glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Old-fashioned glass", ".glassType")
                  }
                >
                  Old-fashioned glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Whiskey Glass", ".glassType")}
                >
                  Whiskey Glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Collins glass", ".glassType")}
                >
                  Collins glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Pousse cafe glass", ".glassType")
                  }
                >
                  Pousse cafe glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Champagne flute", ".glassType")
                  }
                >
                  Champagne flute
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Whiskey sour glass", ".glassType")
                  }
                >
                  Whiskey sour glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Cordial glass", ".glassType")}
                >
                  Cordial glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Brandy snifter", ".glassType")
                  }
                >
                  Brandy snifter
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("White wine glass", ".glassType")
                  }
                >
                  White wine glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Nick and Nora Glass", ".glassType")
                  }
                >
                  Nick and Nora Glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Hurricane glass", ".glassType")
                  }
                >
                  Hurricane glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Coffee mug", ".glassType")}
                >
                  Coffee mug
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Shot glass", ".glassType")}
                >
                  Shot glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Jar", ".glassType")}
                >
                  Jar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Irish coffee cup", ".glassType")
                  }
                >
                  Irish coffee cup
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Punch bowl", ".glassType")}
                >
                  Punch bowl
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Pitcher", ".glassType")}
                >
                  Pitcher
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Pint glass", ".glassType")}
                >
                  Pint glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Copper Mug", ".glassType")}
                >
                  Copper Mug
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Wine Glass", ".glassType")}
                >
                  Wine Glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Beer mug", ".glassType")}
                >
                  Beer mug
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Margarita/Coupette glass", ".glassType")
                  }
                >
                  Margarita/Coupette glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Beer pilsner", ".glassType")}
                >
                  Beer pilsner
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Beer Glass", ".glassType")}
                >
                  Beer Glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Parfait glass", ".glassType")}
                >
                  Parfait glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Mason jar", ".glassType")}
                >
                  Mason jar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    getDrinkByGlass("Margarita glass", ".glassType")
                  }
                >
                  Margarita glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Martini Glass", ".glassType")}
                >
                  Martini Glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Balloon Glass", ".glassType")}
                >
                  Balloon Glass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Coupe Glass", ".glassType")}
                >
                  Coupe Glass
                </button>
              </li>
            </ul>
          </li>

          {/* Search bar */}
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
