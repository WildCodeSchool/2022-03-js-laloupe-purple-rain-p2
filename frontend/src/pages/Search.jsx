import AbusAlcool from "@components/AbusAlcool";
import { useState, useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import Popup from "@components/SearchPage/Popup";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import SearchWindow from "@components/SearchPage/SearchWindow";

const Search = ({ ageCheck, setAgeCheck, handleAgeCheck }) => {
  const { lightTheme } = useContext(LightThemeContext);
  const [infoPopup, setInfoPopup] = useState();
  return (
    <>
      {ageCheck ? "" : <AbusAlcool handleAgeCheck={handleAgeCheck} />}
      {infoPopup && (
        <Popup
          key={infoPopup.idDrink + 1}
          infoPopup={infoPopup}
          setInfoPopup={setInfoPopup}
        />
      )}
      <section
        className={lightTheme ? "topPage light column" : "topPage column"}
      >
        <Header infoPopup={infoPopup} />
        <SearchWindow setInfoPopup={setInfoPopup} />
      </section>
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Search;
