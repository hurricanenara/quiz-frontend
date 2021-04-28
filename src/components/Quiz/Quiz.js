import React, { useState } from "react";
import { apiCall } from "../../services/api";

const Quiz = ({ currentQuestion, state, setNextQuestion }) => {
  console.log(currentQuestion, state);
  const { answers, question, id } = currentQuestion;
  const [feedback, setFeedback] = useState();
  const [counter, setCounter] = useState(1);
  const [isDone, setIsDone] = useState();
  const [correctCounter, setCorrectCounter] = useState(0);

  const answerHandler = (answer) => {
    const questionId = id;
    const quizId = state.quiz_id;
    // /quiz/:quiz_id/question/:question_id
    apiCall(`quiz/${quizId}/question/${questionId}`, "POST", {
      answer,
    }).then((response) => {
      const nextQuestion = response.next_question;
      const isDone = response.message === "end";
      setIsDone(isDone);
      if (!isDone) {
        if (response.is_correct) {
          setCorrectCounter(correctCounter + 1);
        }
        setNextQuestion(nextQuestion);
        setFeedback(response.is_correct);
      }
      console.log(response);
    });
    setCounter(counter + 1);
  };

  if (isDone) {
    return (
      <div>
        Score: {correctCounter} / {state.total_questions}
      </div>
    );
  }

  return (
    <div>
      <div>
        {counter} / {state.total_questions}
      </div>
      {counter !== 1 && (
        <span>
          {feedback
            ? "Previous Question Correct"
            : "Previous Question Incorrect"}
        </span>
      )}
      <div>{question}</div>
      <div>
        {Object.keys(answers).map((letter) => {
          return (
            <span onClick={() => answerHandler(letter)}>
              {letter} : {answers[letter]}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
