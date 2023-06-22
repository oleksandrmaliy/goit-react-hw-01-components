import PropTypes from 'prop-types';

import {
  UserCard,
  Info,
  Avatar,
  Username,
  Tag,
  Location,
  List,
  ListItem,
  Label,
  Value,
} from './user.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <UserCard>
      <Info>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Info>
      <List>
        <ListItem>
          <Label>Followers</Label>
          <Value>{followers}</Value>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Value>{views}</Value>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Value>{likes}</Value>
        </ListItem>
      </List>
    </UserCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
