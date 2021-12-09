import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";
import FriendListItem from "./friend-list-item/friendListItem";

function FriendList({ friends }) {
  const friend = friends.map((friend) => (
    <FriendListItem
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
      key={friend.id}
    />
  ));
  return <ul className={styles.friendList}>{friend}</ul>;
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
          key: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
      }).isRequired
  )
}

export default FriendList;
