import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "your-key-here";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }

  fetch = (event) => {
    event.preventDefault();
    let searchTerm = this.state.searchTerm;
    //using state search term and interpolating into query
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${NYT_API_KEY}`;
    fetch(URL)
      .then(res => res.json())
      .then(resjson => this.setState({ reviews: resjson.results }))
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.fetch(event)}>
          <input
            type="text"
            name="values"
            onChange={(event) =>
              this.setState({ searchTerm: event.target.value })
            }
            value={this.state.searchTerm}
          />
          <input type="submit" />
        </form>
        {typeof this.state.reviews === "object" &&
          this.state.reviews.length > 0 && <h1>Movie Reviews:</h1>}
        {<MovieReviews reviews={this.state.reviews} />}
      </div>
    );
  }
}
