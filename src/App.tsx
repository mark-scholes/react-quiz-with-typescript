import React, { useState } from "react";
//components
import QuestionCard from "./components/QuestionCard";
//end of components

const TOTAL_QUESTIONS = 10;

const App = () => {
  //state
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState([0]);
  const [gameOver, setGameOver] = useState(true);

  //end of state

  //functions

  //API call
  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  // end of Functions
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz}>
        start
      </button>
      <p className="score">score:</p>
      <p>Loading...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
      />
      <button className="next" onClick={nextQuestion}>
        next question
      </button>
    </div>
  );
};

export default App;
