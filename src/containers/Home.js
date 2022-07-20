import '../App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  accessToken,
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getUserSavedTracks,
} from '../spotify';
import { catchErrors } from '../utils';

import Navbar from '../components/Navbar';
import Track from '../components/Track';
import ProfileData from '../components/ProfileData';

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [savedTracks, setSavedTracks] = useState([]);
  // const [token, setToken] = useState(null);

  const tracks = [];

  const updateTracklist = (tracksArray) => {
    const newTracklist = [];
    for (let i = 0; i < tracksArray.length; i++) {
      const trackObj = tracksArray[i];

      // track info
      const trackTitle = trackObj.track.name;
      const trackDurationMS = trackObj.track.duration_ms;
      const trackDurationMin = Math.floor(trackDurationMS / 60000);
      const trackDurationSec = Math.floor((trackDurationMS % 60000) / 1000);
      const trackDurationString = `${trackDurationMin} min ${trackDurationSec} sec`;

      // artist information
      const artistsArr = trackObj.track.album.artists;
      const artists = [];
      artistsArr.forEach((artist) => artists.push(artist.name));

      // album info
      const albumTitle = trackObj.track.album.name;
      const albumCoverURL = trackObj.track.album.images[0].url;

      const trackProps = {
        trackTitle,
        trackDurationString,
        artists,
        albumTitle,
        albumCoverURL,
      };

      newTracklist.push(<Track key={i} {...trackProps} />);
      setSavedTracks(newTracklist);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userSavedTracks = await getUserSavedTracks();
      console.log(userSavedTracks.data.items);
      updateTracklist(userSavedTracks.data.items);
    };

    catchErrors(fetchData());
  }, []);

  // const trackData = [
  //   {
  //     trackTitle: 'Hello',
  //     artist: 'Adele',
  //     albumTitle: '25',
  //     review: {
  //       rating: 4,
  //       text: "I feel like she's really saying hello",
  //       created_at: Date.now,
  //     },
  //   },
  // ];

  console.log('your saved tracks: ', savedTracks);

  return (
    <div className="Home">
      <Navbar />
      {profile && <ProfileData profile={profile} playlists={playlists} />}
      <div className="tracks">{savedTracks}</div>
    </div>
  );
};

export default Home;
