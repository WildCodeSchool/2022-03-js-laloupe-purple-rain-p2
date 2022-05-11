import AbusAlcool from "@components/AbusAlcool";
import "@components/Homepage/CarteGMaps.scss";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Carrousel from "@components/Carrousel/Carrousel";
import Maps from "@components/Homepage/CarteGMaps";
import Job from "@components/Homepage/Job";

const Homepage = ({ ageCheck, setAgeCheck, handleAgeCheck }) => {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <>
      {ageCheck ? "" : <AbusAlcool handleAgeCheck={handleAgeCheck} />}
      <section
        className={lightTheme ? "topPage light column" : "topPage column"}
      >
        <Header />
        <div className="accueil-cocktail carrous">
          <Carrousel />
        </div>
        <Job />
      </section>
      <section
        className={lightTheme ? "midPage light column" : "midPage column"}
      >
        <Maps />
      </section>
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
