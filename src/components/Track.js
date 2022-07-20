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
    setOpened(opened ? false : true);
  };

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

  // const openTrack = () => {};

  // const closedTrack = () => {};

  return (
    <>
      <div className="track-container">
        <img
          className="album-cover"
          src={albumCoverURL ? albumCoverURL : 'http://goo.gl/vyAs27'}
          alt="album cover"
          // onClick={handleClick}
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
      {opened ? TrackReview({ review }) : null}
    </>
  );
};

export default Track;
