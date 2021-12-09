import React from "react";
import PropTypes from "prop-types";
import styles from "./friendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  let color = "";
  isOnline ? (color = "green") : (color = "red");
  return (
    <li className={styles.item}>
      <span
        className={styles.statusOn}
        style={{ backgroundColor: `${color}` }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
