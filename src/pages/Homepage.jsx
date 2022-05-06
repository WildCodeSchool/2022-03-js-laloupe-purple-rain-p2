import AbusAlcool from "@components/AbusAlcool";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Carrousel from "@components/Carrousel/Carrousel";
import Job from "@components/Homepage/Job";
// import { NeonH, NeonV } from "@components/NeonSeparateur/NeonSeparateur";
// import { Cards, CardsOff } from "@components/Carrousel/Cartes";

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
      {/* <section className="midPage"></section> */}
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
