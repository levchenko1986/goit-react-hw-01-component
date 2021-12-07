import friends from './friends.json';

<FriendList friends={friends} />

const FriendList = () => {
  return (
    <ul className="friend-list">
      <FriendListItem />
    </ul>
  )
}

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className="item">{isOnline}
      <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}
export default FriendList;

