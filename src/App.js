import FriendList from "./components/friend-list/friendList";
import Profile from "./components/social-profile/social-profile";
import Statistics from "./components/statistics/statistics";
import TransactionHistory from "./components/transaction-history/transactions";
import data from "./data";

function App() {
  return (
    <>
      <Profile
        username={data.users.username}
        tag={data.users.tag}
        location={data.users.location}
        avatar={data.users.avatar}
        stats={data.users.stats}
      />
      <Statistics title="Upload stats" stats={data.stat} />
      <Statistics stats={data.stat} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </>
  );
}

export default App;
