/* eslint-disable */

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import QuizParent from "@components/History/Quizz/QuizParent";

const History = () => {
  return (
    <>
      <section className="topPage column">
        <Header />
        <QuizParent />
      </section>
      <section className="midPage"></section>
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default History;
