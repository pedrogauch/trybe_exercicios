import React, { Component } from 'react'

const tasks = ['acordar', 'alongar', 'carinho na lola', 'tomar café']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

export default class App extends Component {
  render() {
    return (
      <ul>
        { tasks.map((task) => Task(task)) }
      </ul>
    )
  }
}
