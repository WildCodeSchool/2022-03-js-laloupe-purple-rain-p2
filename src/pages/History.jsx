/* eslint-disable */

import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import QuizParent from "@components/History/Quizz/QuizParent";

const History = () => {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <>
      <section
        className={lightTheme ? "topPage light column" : "topPage column"}
      >
        <Header />
        <QuizParent />
      </section>
      <section className={lightTheme ? "midPage light" : "midPage"}></section>
      <section className={lightTheme ? "botPage light" : "botPage"}>
        <Footer />
      </section>
    </>
  );
};

export default History;
