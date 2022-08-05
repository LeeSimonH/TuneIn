import '../App.scss';
import React, { useState } from 'react';

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

  const handleClick = () => {
    console.log('opening the track');
    setOpened(opened == true ? false : true);
  };

  function TrackReview({ rating, review }) {
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
