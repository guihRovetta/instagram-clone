import React from 'react';

import { UserType } from '../../PostList';
import UserImage from '../../UserImage';
import {
  Container,
  TitleWrapper,
  NameLocationWrapper,
  Name,
  Location,
  MoreButton,
  MoreIcon,
} from './styles';

type PostHeaderProps = {
  user: UserType;
};

const PostHeader = ({ user }: PostHeaderProps) => {
  return (
    <Container>
      <TitleWrapper>
        <UserImage
          hasStory={user?.hasStory}
          size="small"
          uri={user?.image?.uri}
        />

        <NameLocationWrapper>
          <Name>{user?.name}</Name>
          {user?.location && <Location>{user?.location}</Location>}
        </NameLocationWrapper>
      </TitleWrapper>

      <MoreButton>
        <MoreIcon name="more-horizontal" />
      </MoreButton>
    </Container>
  );
};

export default PostHeader;
