import user from './data/user.json';
import data from './data/data.json';

import { Title } from './Title/Title.styled';
import { Profile } from './User/User';
import { Statistics } from './Statistics/Statistics';

console.log(data);

export const App = () => {
  return (
    <>
      <Title>Task 1:</Title>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Title>Task 2:</Title>
      <Statistics title="Upload stats" stats={data} />
      <Title>Task 3:</Title>
      <Title>Task 4:</Title>
      <Title>Game Over!</Title>
    </>
  );
};
