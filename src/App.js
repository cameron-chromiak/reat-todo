import React, { Component } from 'react';

import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [
      {
      title: 'Trash',
      id: 1,
      completed: false},
      {
      title: 'Dog',
      id: 2,
      completed: false},
      {
      title: 'Dinner',
      id: 3,
      completed: false},
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos/>
      </div>
    );
  }
}

export default App;
