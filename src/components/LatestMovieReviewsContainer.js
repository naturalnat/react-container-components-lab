import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
//should have state
//state property reviews
//top level class latest movie reviews
//fetch data from nyt
//redner reviews after state updated 

export default class LatestMovieReviewsContainer extends Component {
constructor () { //initializes object states in class 
    super() //super calls consructor of parent class 
    this.state = {
        reviews: []
    }; 
}

componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(resjson => this.setState({
        reviews: data.results
    }))
}

render() {
    return (
        <div className="latest-movie-reviews">
        <h2>The Latest Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
}

}