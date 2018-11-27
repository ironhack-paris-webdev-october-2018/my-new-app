import React, { Component } from "react";

class ListExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [ "Dogs", "Iguanas", "Cats", "Sloths", "Unicorns" ]
    };
  }

  addAnimal() {
    const { animals } = this.state;

    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 1) {
      animals.push("T-Rex");
    }
    else {
      animals.push("Velociraptor");
    }

    // tell React to update the DOM with setState()
    this.setState({ animals });
  }

  render() {
    const { animals } = this.state;

    // map over the array of strings to get "animalis" (an array of <li> tags)
    const animalis =
      animals.map((oneAnimal, index) => {
        // add a UNIQUE key to the HTML tags you return in "map()"
        // (this helps React detect what DOM elements to change)
        return <li key={index}>{oneAnimal}</li>;
      });

    return (
      <section className="ListExample">
        <h2>List Example Component</h2>

        <button onClick={() => this.addAnimal()}>
          Add an Animal
        </button>

        <ul>
          {/* display your array of HTML elements */}
          {animalis}
        </ul>
      </section>
    );
  }
}

export default ListExample;
