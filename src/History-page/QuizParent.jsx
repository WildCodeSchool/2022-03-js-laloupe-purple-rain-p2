import React, { useState, useEffect } from "react";
import "./QuizParent.css";

import Start from "@components/History/Start";
import Question from "@components/History/Question";
import End from "@components/History/End";
import Modal from "@components/History/Modal";
import quizData from "./data/quiz.json";

let interval;

const QuizParent = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const resetQuiz = () => {
    setStep(1);
    setActiveQuestion(0);
    setAnswers([]);
    setShowModal(false);
    setTime(0);
  };

  const exitQuiz = () => {
    setStep(1);
    setActiveQuestion(0);
    setAnswers([]);
    setShowModal(false);
    setTime(0);
  };

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div className="historyContainer">
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
          onAnswersCheck={() => setShowModal(true)}
          time={time}
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
