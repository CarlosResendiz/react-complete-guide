import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <h1>This is working</h1>
      <Person name="Max" age="28"></Person>
      <Person name="Manu" age="29">My Hobbies: Racing</Person>
      <Person name="Stephanie" age="26"></Person>
    </div>
  );
}

export default App;
