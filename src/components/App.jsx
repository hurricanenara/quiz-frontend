import React, { useState } from 'react';
import { apiCall } from '../services/api';
import './App.css';
import Quiz from './Quiz/Quiz';

function App() {
  const [state, setState] = useState();
  const [currentQuestion, setCurrentQuestion] = useState();

  const handleApiCall = () => {
    apiCall('quiz', 'POST', {})
      .then(response => {
        setState(response)
        setCurrentQuestion(response.first_question);
        console.log(response);
      })
  }

  if (!state || !currentQuestion) {
    return (
      <div id="app">
        <button onClick={handleApiCall}>
          Start Quiz
        </button>
      </div>
    )
  }

  return (
    <div id="app">
      <Quiz state={state} currentQuestion={currentQuestion} setNextQuestion={setCurrentQuestion} />
    </div>
  );
}

export default App;
