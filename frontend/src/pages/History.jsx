/* eslint-disable */
import AbusAlcool from "@components/AbusAlcool";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import QuizParent from "@components/History/Quizz/QuizParent";
import HistoryText from "@components/History/Quizz/CocktailHistory";

const History = ({ ageCheck, setAgeCheck, handleAgeCheck }) => {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <>
      {ageCheck ? "" : <AbusAlcool handleAgeCheck={handleAgeCheck} />}
      <section
        className={lightTheme ? "topPage light column" : "topPage column"}
      >
        <Header />
        <HistoryText />
        <QuizParent />
      </section>
      <section className={lightTheme ? "botPage light" : "botPage"}>
        <Footer />
      </section>
    </>
  );
};

export default History;
