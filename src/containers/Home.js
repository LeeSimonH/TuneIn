import '../App.scss';
import React, { useState, useEffect } from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';
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
  const darkTheme = useTheme();
  // const toggleTheme = useThemeUpdate();

  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [savedTracks, setSavedTracks] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

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
        trackReview: {
          // rating: 4,
          // review: 'This song gud',
        },
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

  // console.log('your saved tracks: ', savedTracks);

  return (
    <div className={darkTheme ? 'Home darkTheme' : 'Home lightTheme'}>
      <Navbar />
      {profile && <ProfileData profile={profile} playlists={playlists} />}
      <div className="tracks">{savedTracks}</div>
    </div>
  );
};

export default Home;
