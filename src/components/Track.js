import '../App.scss';
import React, { useEffect, useState } from 'react';

// import TrackReview from './TrackReview';

const Track = (props) => {
  const {
    trackTitle,
    trackDurationString,
    artists,
    albumTitle,
    albumCoverURL,
    trackReview,
  } = props;

  let artistsString = '';
  for (let i = 0; i < artists.length; i++) {
    artistsString += artists[i];
    if (i !== artists.length - 1) {
      artistsString += ', ';
    }
  }

  const [opened, setOpened] = useState(false);

  const [reviewing, setReviewing] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    const { rating, review } = trackReview;
    if (rating && review) {
      setReviewRating(rating);
      setReviewText(review);
    }
  }, []);

  const handleClick = () => {
    setOpened(opened == true ? false : true);
  };

  function TrackReviewForm() {
    return (
      <div>
        <form
          className="review-form"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`New review submitted: \n
              Rating: ${reviewRating} out of 5
              Review: ${reviewText}
            `);
            setReviewing(false);
          }}
        >
          <label htmlFor="rating">
            How would you rate this song out of 5 stars?
          </label>
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            value={reviewRating}
            onChange={(e) => {
              setReviewRating(e.target.value);
            }}
            required
          ></input>
          <label htmlFor="review">
            What do you have to say about this song?
          </label>
          <textarea
            name="review"
            placeholder="Review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <div className="review-form-buttons">
            <input type="reset"></input>
            <input type="submit"></input>
          </div>
        </form>
      </div>
    );
  }

  function TrackReview({ rating, review }) {
    return (
      <div className="review-container">
        <div className="review">
          <ul>
            <li className="track-rating">
              Rating: {reviewRating ? reviewRating + ' / 5 stars' : 'N/A'}
            </li>
            <li className="review-text">
              Review: {reviewText ? reviewText : 'N/A'}
            </li>
          </ul>
          <div>
            <button onClick={() => setReviewing(true)}>
              {rating && review ? 'Edit Review' : 'New Review'}
            </button>
          </div>
          {reviewing ? TrackReviewForm() : <></>}
        </div>

        <div className="review-background"></div>
        <button onClick={handleClick} className="close-review-btn">
          x
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="track-container">
        <img
          className="album-cover"
          src={albumCoverURL ? albumCoverURL : 'http://goo.gl/vyAs27'}
          alt="album cover"
          onClick={handleClick}
        />
        <div className="track-info">
          <ul>
            <li className="track-title">
              Track Title: {trackTitle ? trackTitle : 'N/A'}
            </li>
            <li className="album-name">
              Album: {albumTitle ? albumTitle : 'N/A'}
            </li>
            <li className="artist-name">
              Artist: {artistsString ? artistsString : 'N/A'}
            </li>
            <li className="track-duration">
              Length: {trackDurationString ? trackDurationString : 'N/A'}
            </li>
          </ul>
        </div>
      </div>
      {opened ? TrackReview(trackReview) : null}
    </>
  );
};

export default Track;
