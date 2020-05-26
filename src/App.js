import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Vlad", age: 22 },
      { name: "Oleg", age: 1 },
      { name: "Ann", age: 53 },
    ],
    otherState: "some state",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Vlad", age: 22 },
        { name: newName, age: 1 },
        { name: "Ann", age: 53 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Vlad", age: 22 },
        { name: event.target.value, age: 1 },
        { name: "Ann", age: 53 },
      ],
    });
  };

  render() {
    const style = {
      backgroundcolor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi Hi Hi Hello</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onChange={() => this.switchNameHandler("new name")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
          changed={this.nameChangedHandler}
        >My hb: race</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
