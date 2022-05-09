import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cards from "@components/SearchPage/Cartes";
import "@components/SearchPage/SearchWindow.scss";
import LightThemeContext from "@contexts/LightTheme";
import { useParams } from "react-router-dom";
import cocktailDataRaw from "./rawData";

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
  const { lightTheme } = useContext(LightThemeContext); // Imports the light theme context

  // Pages offset values
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

  // Fetches all drinks from API using "?s=" without any parameters, kinda weird but it works
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
  // Fetches all categories from API
  const [categoriesList, setCategoriesList] = useState([]);

  async function getAllCategories() {
    const response = await axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list")
      .then((categories) => setCategoriesList(categories.data.drinks))
      .catch((err) => {
        console.error(err);
      });

    if (response) {
      return response;
    }
    return [];
  }

  // Fetches all glasses from API
  const [glassList, setGlassList] = useState([]);

  async function getAllGlasses() {
    const response = await axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list")
      .then((glasses) => setGlassList(glasses.data.drinks))
      .catch((err) => {
        console.error(err);
      });

    if (response) {
      return response;
    }
    return [];
  }

  // Fetches all ingredients from API
  const [ingredientsList, setIngredientsList] = useState([]);

  async function getAllIngredients() {
    const response = await axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list")
      .then((ingredients) => setIngredientsList(ingredients.data.drinks))
      .catch((err) => {
        console.error(err);
      });

    if (response) {
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
  const handleFilterMenus = (categoryName) => {
    document
      .querySelector(`.searchList ${categoryName}`)
      .classList.toggle("hide");
  };

  // Closes menus when clicking outside
  const handleFilterClick = (e) => {
    if (e.target.id !== "categoriesFilter") {
      document.querySelector(`.searchList .categories`).classList.add("hide");
    }
    if (e.target.id !== "alcoholsFilter") {
      document.querySelector(`.searchList .alcohols`).classList.add("hide");
    }
    if (e.target.id !== "glassesFilter") {
      document.querySelector(`.searchList .glassType`).classList.add("hide");
    }
    if (e.target.id !== "ingredientsFilter") {
      document.querySelector(`.searchList .ingredients`).classList.add("hide");
    }
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the category
  const getDrinkByCategory = (categoryName, catClass) => {
    document.querySelector(`.searchList ${catClass}`).classList.toggle("hide");
    if (
      cocktailList.length === 0 ||
      cocktailList.filter((item) => item.strCategory === categoryName)
        .length === 0
    ) {
      getAllDrinks().then((data) => {
        data.push(cocktailDataRaw[0]);
        setCocktailList(
          data
            .filter((item) => item.strCategory === categoryName)
            .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
        );
      });
    } else {
      setCocktailList(
        cocktailList
          .filter((item) => item.strCategory === categoryName)
          .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
      );
    }

    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the alcohol type
  const getDrinkByAlcohol = (alcohol, alcClass) => {
    document.querySelector(`.searchList ${alcClass}`).classList.toggle("hide");
    if (
      cocktailList.length === 0 ||
      cocktailList.filter((item) => item.strAlcoholic === alcohol).length === 0
    ) {
      getAllDrinks().then((data) => {
        data.push(cocktailDataRaw[0]);
        setCocktailList(
          data
            .filter((item) => item.strAlcoholic === alcohol)
            .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
        );
      });
    } else {
      setCocktailList(
        cocktailList
          .filter((item) => item.strAlcoholic === alcohol)
          .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
      );
    }
    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones fitting the glass type
  const getDrinkByGlass = (glass, glassClass) => {
    document
      .querySelector(`.searchList ${glassClass}`)
      .classList.toggle("hide");
    if (
      cocktailList.length === 0 ||
      cocktailList.filter((item) => item.strGlass === glass).length === 0
    ) {
      getAllDrinks().then((data) => {
        data.push(cocktailDataRaw[0]);
        setCocktailList(
          data
            .filter((item) => item.strGlass === glass)
            .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
        );
      });
    } else {
      setCocktailList(
        cocktailList
          .filter((item) => item.strGlass === glass)
          .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
      );
    }
    setCategoryFiltered(true);
    setFiltered(true);
  };

  // Fetches the whole drink lists and apply a filters to keep only the ones having the selected ingredients
  const getDrinkByIngredients = (ingredientClass) => {
    document
      .querySelector(`.searchList ${ingredientClass}`)
      .classList.toggle("hide");
  };

  // Resets filters to display all drinks
  const resetFiltersStatus = () => {
    if (window.location.href !== "/search") {
      window.location.href = "/search";
    }
    if (currentLetter !== "") {
      setCurrentLetter("");
    }
    if (numberFiltered) {
      setNumberFiltered(false);
    }
    if (categoryFiltered) {
      setCategoryFiltered(false);
    }
    if (searchField !== "") {
      setSearchField("");
    }
    setFiltered(false);
    getAllDrinks().then((data) => setCocktailList(data));
  };

  // Handles the API fetch from the carrousel cards by listening to URL params
  const { category } = useParams();

  const handleCatLink = () => {
    if (category) {
      setCategoryFiltered(true);
      if (category === "cocktails") {
        getAllDrinks().then((data) => {
          data.push(cocktailDataRaw[0]);
          setCocktailList(
            data
              .filter((item) => item.strCategory === "Cocktail")
              .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
          );
        });
        setFiltered(true);
      }
      if (category === "shots") {
        getAllDrinks().then((data) => {
          data.push(cocktailDataRaw[0]);
          setCocktailList(
            data
              .filter((item) => item.strCategory === "Shot")
              .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
          );
        });
        setFiltered(true);
      }
      if (category === "ordinary_drinks") {
        getAllDrinks().then((data) => {
          data.push(cocktailDataRaw[0]);
          setCocktailList(
            data
              .filter((item) => item.strCategory === "Ordinary Drink")
              .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
          );
        });
        setFiltered(true);
      }
    }
  };

  useEffect(() => {
    if (window.location.href === "/search") {
      resetFiltersStatus();
    }
  }, []);

  // Checks filtering state and handles letter filtering requests
  useEffect(() => {
    document.addEventListener("click", handleFilterClick);

    if (
      currentLetter === "" &&
      numberFiltered === false &&
      categoryFiltered === false &&
      searchField === ""
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
    getAllCategories();
    getAllGlasses();
    getAllIngredients();
    handleCatLink();

    return () => document.removeEventListener("click", handleFilterClick);
  }, [currentLetter, numberFiltered, searchField]);

  return (
    <section
      className={lightTheme ? "searchContainer light" : "searchContainer"}
    >
      <div className={lightTheme ? "searchBar light" : "searchBar"}>
        <ul className="searchList">
          {/* Filter by categories */}
          <li>
            <button
              id="categoriesFilter"
              type="button"
              onClick={() => handleFilterMenus(".categories")}
            >
              Categories
            </button>
            <ul className="categories hide">
              {categoriesList.map((categoryName) => {
                return (
                  <li key={categoryName.strCategory}>
                    <button
                      type="button"
                      onClick={() =>
                        getDrinkByCategory(
                          categoryName.strCategory,
                          ".categories"
                        )
                      }
                    >
                      {categoryName.strCategory}
                    </button>
                  </li>
                );
              })}
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
              id="alcoholsFilter"
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

          {/* Filter by glass type */}
          <li>
            <button
              id="glassesFilter"
              type="button"
              onClick={() => handleFilterMenus(".glassType")}
            >
              Glass Type
            </button>
            <ul className="glassType hide">
              <li>
                <button
                  type="button"
                  onClick={() => getDrinkByGlass("Wild Glass", ".glassType")}
                >
                  Wild Glass
                </button>
              </li>
              {glassList.map((glass) => {
                return (
                  <li key={glass.strGlass}>
                    <button
                      type="button"
                      onClick={() =>
                        getDrinkByGlass(glass.strGlass, ".glassType")
                      }
                    >
                      {glass.strGlass}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>

          {/* Filter by ingredients */}
          <li>
            <button
              id="ingredientsFilter"
              type="button"
              onClick={() => handleFilterMenus(".ingredients")}
            >
              Ingredients
            </button>
            <ul className="ingredients hide">
              {ingredientsList.map((item) => {
                return (
                  <li key={item.strIngredient1}>
                    <button
                      type="button"
                      onClick={() => getDrinkByIngredients(".ingredients")}
                    >
                      {item.strIngredient1}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>

          {/* Search bar */}
          <li className="inputList">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchField(e.target.value)}
              value={searchField}
            />
          </li>
        </ul>
      </div>

      <div className={lightTheme ? "searchContent light" : "searchContent"}>
        <ul className="letterBar">
          <p className="counter">
            {searchField !== ""
              ? cocktailList.filter((item) =>
                  item.strDrink
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
                ).length
              : cocktailList.length}{" "}
            results
          </p>
          <button
            type="button"
            className={filtered ? "rmFilters" : "hide"}
            onClick={() => resetFiltersStatus()}
          >
            Reset Filters
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
