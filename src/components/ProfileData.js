import * as React from 'react';

const ProfileData = ({ profile, playlists }) => {
  return (
    <div className="profile-display">
      {profile.images.length && profile.images[0].url && (
        <img
          className="profile-picture"
          src={profile.images[0].url}
          alt="Avatar"
        />
      )}
      <div>
        <p>Hello, </p>
        <h1 className="profile-display-name">{profile.display_name}</h1>
        <div className="profile-stats">
          <p className="header__meta">
            {playlists && (
              <span>
                {playlists.total} Playlist{playlists.total !== 1 ? 's' : ''}
              </span>
            )}
            <i> - </i>
            {profile && (
              <span>
                {profile.followers.total} Follower
                {profile.followers.total !== 1 ? 's' : ''}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
