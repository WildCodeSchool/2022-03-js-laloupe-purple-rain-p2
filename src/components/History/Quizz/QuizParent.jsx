import React, { useState, useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import "./QuizParent.scss";

import Start from "@components/History/Quizz/logic/Start";
import Question from "@components/History/Quizz/logic/Question";
import End from "@components/History/Quizz/logic/End";
import Modal from "@components/History/Quizz/logic/Modal";
import quizData from "@components/History/Quizz/data/quiz.json";

const QuizParent = () => {
  const { lightTheme } = useContext(LightThemeContext);

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const resetQuiz = () => {
    setStep(1);
    setActiveQuestion(0);
    setAnswers([]);
    setShowModal(false);
  };

  const exitQuiz = () => {
    setStep(1);
    setActiveQuestion(0);
    setAnswers([]);
    setShowModal(false);
  };

  const quizStartHandler = () => {
    setStep(2);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  };

  return (
    <div className={lightTheme ? "historyContainer light" : "historyContainer"}>
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
          exitQuiz={() => exitQuiz()}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={quizData.data}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowModal(!showModal)}
          resetQuiz={() => resetQuiz()}
        />
      )}

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          results={answers}
          data={quizData.data}
        />
      )}
    </div>
  );
};

export default QuizParent;
