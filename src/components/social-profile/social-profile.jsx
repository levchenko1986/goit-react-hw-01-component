import React from 'react';
import user from './user.json';



const Profile = ({username, tag, location, avatar, stats = []}) => {
  return (
    <div className="profile">
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar" width="50px"
      className={avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={stats}>
    <li>
      <span className="label">{stats.flowers}</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">{stats.views}</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">{stats.likes}</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>
  )
}

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

export default Profile;