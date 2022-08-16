import '../App.scss';
import React, { useState } from 'react';

export default function TrackReview({ rating, review }) {
  return (
    <div className="review-container">
      <div className="review">
        <ul>
          <li className="track-rating">
            Rating: {rating ? rating + ' / 5 stars' : 'N/A'}
          </li>
          <li className="review-text">Review: {review ? review : 'N/A'}</li>
        </ul>
      </div>
      <div className="review-background"></div>
      <button onClick={handleClick} className="close-review-btn">
        x
      </button>
    </div>
  );
}
