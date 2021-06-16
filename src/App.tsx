import React, { useState } from "react";
import { fetchQuizQuestions, QuestionState, Difficulty } from "./API";
import QuestionCard from "./components/QuestionCard";

import {BaseStyle} from './App.styles'

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    // TODO add a try-catch wrapping this, the fetch could fail
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const isCorrect = questions[questionNumber].correct_answer === answer;
      if (isCorrect) setScore((previousScore) => previousScore + 1);

      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        isCorrect,
        correctAnswer: questions[questionNumber].correct_answer,
      };

      setUserAnswers((previousAnswers) => [...previousAnswers, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = questionNumber + 1;
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);    
    } else {
      setQuestionNumber(nextQuestion);
    }
  };

  const shouldRenderNextButton =
    !gameOver &&
    !loading &&
    userAnswers.length === questionNumber + 1 &&
    questionNumber !== TOTAL_QUESTIONS - 1;

  return (
    <>
    <BaseStyle />
    <div className="App">
      <h1>Yet Another Quiz App</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={questionNumber + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          callback={checkAnswer}
        />
      )}
      {shouldRenderNextButton ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
      <footer>
        Photo by{" "}
        <a href="https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Brett Jordan
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </footer>
    </div></>
  );
};

export default App;
