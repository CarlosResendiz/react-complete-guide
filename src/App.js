import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {  
class App extends Component {  

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]
  }

  render() {
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>This is working</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
     );
  };
}

export default App;
