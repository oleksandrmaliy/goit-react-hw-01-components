import user from './data/user.json';

import { Title } from './title/title.styled';
import { Profile } from './user/user';

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
      <Title>Task 3:</Title>
      <Title>Task 4:</Title>
      <Title>Game Over!</Title>
    </>
  );
};
