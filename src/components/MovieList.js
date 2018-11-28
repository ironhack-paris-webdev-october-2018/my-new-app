import React, { Component } from "react";

import MovieForm from "./MovieForm";

function longAwardText(movie) {
  if (!movie.hasOscars) {
    return <p>Great movie but no Oscars. Rating is {movie.imdbRating}.</p>;
  }
  else if (movie.imdbRating >= 9) {
    return <p>🤯 Amazing film! Won oscars and has a rating of {movie.imdbRating}.</p>;
  }
  else if (movie.imdbRating >= 7) {
    return <p>😯 Got Oscars and has a respectable rating of {movie.imdbRating}.</p>;
  }
}


class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOscarFilmsOnly: false,
      movies: [
        {
          _id: "7g",
          title: "The Godfather",
          director: "Francis Coppola",
          imdbRating: 9.2,
          hasOscars: true,
        },
        {
          _id: "8h",
          title: "Star Wars",
          director: "George Lucas",
          imdbRating: 8.7,
          hasOscars: true,
        },
        {
          _id: "9i",
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          imdbRating: 9.3,
          hasOscars: false,
        },
        {
          _id: "10j",
          title: "Glitter",
          director: "Vondie Curtis-Hall",
          imdbRating: 2.2,
          hasOscars: false,
        },
      ],
    };
  }

  deleteMovie(movieIndex) {
    const { movies } = this.state;
    movies.splice(movieIndex, 1);

    // tell React to update the DOM with setState()
    this.setState({ movies });
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    // "unshift()" to add the item to the start
    movies.unshift(newMovie);
    this.setState({ movies });
  }

  toggleOscarFilter() {
    const { showOscarFilmsOnly } = this.state;
    // set the state to the opposite boolean value that it had before
    this.setState({ showOscarFilmsOnly: !showOscarFilmsOnly });
  }

  render() {
    const { movies, showOscarFilmsOnly } = this.state;

    // map over the array of object to get "movieHtml" (an array of <li> tags)
    const movieHtml =
      movies.map((oneMovie, index) => {
        // show the <li> if the "showOscarFilmsOnly" filter is OFF
        // -OR- if the filter is ON and the movie has oscars
        return (!showOscarFilmsOnly || oneMovie.hasOscars) && (
          // add a UNIQUE key to the HTML tags you return in "map()"
          // (this helps React detect what DOM elements to change)
          <li key={oneMovie._id}>
            <h3>{oneMovie.title}</h3>
            <p>Directed by {oneMovie.director}</p>

            {/* ↓↓↓ only if the movie won oscars */}
            {oneMovie.hasOscars ? (
              <p>Oscar Winning Film 🏆</p>
            ) : (
              <p>Great film, but no Oscars. 😒</p>
            )}
            {/* ↑↑↑ if the movie DIDN'T win oscars */}

            {/* imdbRating less than 4 */}
            {oneMovie.imdbRating < 4 &&
              <p>This movie is 💩.</p>}

            {longAwardText(oneMovie)}

            <button onClick={() => this.deleteMovie(index)}>
              Delete
            </button>
          </li>
        );
      });

    return (
      <section className="MovieList">
        <h2>Movie List Component</h2>

        {/* send the "addNewMovie" function so the form can update the array */}
        <MovieForm addNewMovie={newMovie => this.addNewMovie(newMovie)} />

        <button onClick={() => this.toggleOscarFilter()}>
          Show {showOscarFilmsOnly ? "All Films" : "Oscar Winners Only"}
        </button>

        <ul>
          {/* display your array of HTML elements */}
          {movieHtml}
        </ul>
      </section>
    );
  }
}

export default MovieList;
