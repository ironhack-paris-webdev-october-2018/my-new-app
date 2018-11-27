import React, { Component } from 'react';

import './App.css';

import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />

        <h2>App Component</h2>

        <footer>
          <p>Made with 🦃 at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
