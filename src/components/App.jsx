import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

import { Titles } from './Titles/Titles.styled';
import { Profile } from './Profile/User';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

console.log(friends);

export const App = () => {
  return (
    <>
      <Titles>Task 1:</Titles>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Titles>Task 2:</Titles>
      <Statistics title="Upload stats" stats={data} />
      <Titles>Task 3:</Titles>
      <FriendList friends = {friends}/>
      <Titles>Task 4:</Titles>
      <Titles>Game Over!</Titles>
    </>
  );
};
