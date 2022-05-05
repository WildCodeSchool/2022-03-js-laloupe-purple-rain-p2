import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start the quiz</h1>
          <p>Good luck!</p>
          <button
            className="buttonQuiz is-info is-medium"
            type="button"
            onClick={onQuizStart}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
