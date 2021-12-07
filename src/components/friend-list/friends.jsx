import React from "react";
import PropTypes from "prop-types";
import styles from "./friends.module.css";

const FriendList = ({ friends = [] }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, name, avatar, isOnline }) => {
      let color = "";
      isOnline ? (color = "green") : (color = "red");
      return (
        <li className={styles.item} key={id}>
          <span
            className={styles.statusOn}
            style={{ backgroundColor: `${color}` }}
          ></span>
          <img className={avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
