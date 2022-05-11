import AbusAlcool from "@components/AbusAlcool";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Formation from "@components/JobsPage/Formation";
// import imageMetier from "@assets/images/barman-cocktail.jpg";

const Jobs = ({ ageCheck, setAgeCheck, handleAgeCheck }) => {
  const { lightTheme } = useContext(LightThemeContext);
  return (
    <>
      {ageCheck ? "" : <AbusAlcool handleAgeCheck={handleAgeCheck} />}
      <section
        className={lightTheme ? "topPage light column" : "topPage column"}
      >
        <Header />
        <Formation />
      </section>
      {/* <section className="midPage"></section> */}
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Jobs;
