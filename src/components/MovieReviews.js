// Code MovieReviews Here
import React from "react";

//stateless functional
//toplevel component w reviews list class
//render all reviews

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review, id) => (
      <li key={id} className="review">
        <a href={review.link.url} target="_blank">
          {review.display_title}
        </a>
      </li>
    ))}
  </div>
);

export default MovieReviews;
