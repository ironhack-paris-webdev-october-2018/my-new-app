import React, { Component } from "react";

class MovieForm extends Component {
  constructor(props) {
    super(props);

    // set the initial state (everywhere else will be "this.setState()")
    this.state = {
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      hasOscars: false,
    };
  }

  // "onChange" handlers need to receive the "event" object
  // ("event" contains information about the <input> tag)
  genericSynchronize(event) {
    // "event.target" is the <input> tag that "onChange" is connected to
    const { type, name, value, checked } = event.target;
    // "type" is the input tag's type ("number", "checkbox", "text", etc.)
    // "name" is the input tag's name ("_id", "title", "director", etc.)
    // "value" is the text inside of the input
    // "checked" is a boolean for "checkbox" and "radio" inputs

    if (type === "checkbox") {
      // use "checked" boolean as the new state if it's a checkbox
      this.setState({ [name]: checked });
    }
    else {
      // use "value" string as the new state if it's any other kind of input
      this.setState({ [name]: value });
    }
    // in either case the input tag's "name" decides which state gets updated
  }

  // synchronizeTitle(event) {
  //   this.setState({ title: event.target.value });
  // }

  handleSubmit(event) {
    // prevent the page from reloading because of the form submission
    event.preventDefault();

    // call MovieList's "addNewMovie" FUNCTION PROP
    // (pass the form information as an argument)
    this.props.addNewMovie(this.state);

    // clear the form by setting the state back to initial values
    // (REMEMBER use "this.setState()")
    this.setState({
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      hasOscars: false,
    });
  }

  render() {
    return (
      <section className="MovieForm">
        <h3>Add a Movie</h3>

        {/*
          * NO action and method on React forms
          * (use "onSubmit" instead to handle the submission in our code)
          */}
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            ID:
            {/*
              * "value" allows us to reset the inputs (or pre-fill them)
              * "onChange" functions need to receive the "event" object
              */}
            <input value={this.state._id}
                onChange={event => this.genericSynchronize(event)}
                type="text" name="_id" placeholder="11k" />
          </label>

          <label>
            Title:
            <input value={this.state.title}
                onChange={event => this.genericSynchronize(event)}
                type="text" name="title" placeholder="Titanic" />
          </label>

          <label>
            Director:
            <input value={this.state.director}
                onChange={event => this.genericSynchronize(event)}
                type="text" name="director" placeholder="James Cameron" />
          </label>

          <label>
            IMDB Rating:
            <input value={this.state.imdbRating}
                onChange={event => this.genericSynchronize(event)}
                type="number" name="imdbRating" placeholder="9" />
          </label>

          <label>
            <input checked={this.state.hasOscars}
                onChange={event => this.genericSynchronize(event)}
                type="checkbox" name="hasOscars" />
            Oscar Winner?
          </label>

          <button>Save This Movie</button>
        </form>
      </section>
    );
  }
}

export default MovieForm;
