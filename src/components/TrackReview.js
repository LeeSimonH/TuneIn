import '../App.scss';
import React, { useState } from 'react';

export default function TrackReview({ rating, review }) {
  return (
    <div className="track-review">
      <ul>
        <li className="track-rating">
          Rating: {rating ? rating + ' / 5 stars' : 'N/A'}
        </li>
        <li className="review-text">Review: {review ? review : 'N/A'}</li>
      </ul>
    </div>
  );
}

// const TrackReview = ({ review }) => {
//   const { rating, review, created_at } = review;

//   return (
//     <div className="track-review">
//       <span className="rating">
//         Rating: <strong>{rating}/5</strong>
//       </span>
//       <p className="review-text">Review: {review}</p>
//       <span className="timestamp">
//         Created: <strong>{created_at}</strong>
//       </span>
//     </div>
//   );
// };
