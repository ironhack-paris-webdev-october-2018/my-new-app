import React, { Component } from 'react';

import './App.css';

import Header from "./components/Header.js";
import ListExample from "./components/ListExample.js";
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />

        <h2>App Component</h2>
        <ListExample />
        <MovieList />

        <footer>
          <p>Made with 🦃 at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
