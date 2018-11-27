import React, { Component } from "react";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        { _id: "7g", title: "The Godfather", director: "Francis Coppola" },
        { _id: "8h", title: "Star Wars", director: "George Lucas" },
        { _id: "9i", title: "The Shawshank Redemption", director: "Frank Darabont" },
      ],
    };
  }

  deleteMovie(movieIndex) {
    const { movies } = this.state;
    movies.splice(movieIndex, 1);

    // tell React to update the DOM with setState()
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    // map over the array of object to get "movieHtml" (an array of <li> tags)
    const movieHtml =
      movies.map((oneMovie, index) => {
        // add a UNIQUE key to the HTML tags you return in "map()"
        // (this helps React detect what DOM elements to change)
        return (
          <li key={oneMovie._id}>
            <h3>{oneMovie.title}</h3>
            <p>Directed by {oneMovie.director}</p>
            <button onClick={() => this.deleteMovie(index)}>
              Delete
            </button>
          </li>
        );
      });

    return (
      <section className="MovieList">
        <h2>Movie List Component</h2>

        <ul>
          {/* display your array of HTML elements */}
          {movieHtml}
        </ul>
      </section>
    );
  }
}

export default MovieList;
