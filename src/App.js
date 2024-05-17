import React from 'react';
import './App.css';
import Greeting from './QUIZ/Quiz-1';
import ClickCounter from './QUIZ/Quiz-2';
import MessageDisplay from './QUIZ/Quiz-3';
import ClickCounterWithEffect from './QUIZ/Quiz-4';
import SimpleForm from './QUIZ/Quiz-5';

function App() {
  return (
    <div className="App">
      <Greeting />
      <ClickCounter />
      <MessageDisplay />
      <ClickCounterWithEffect />
      <SimpleForm />
    </div>
  );
}

export default App;
