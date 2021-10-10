import React from 'react';

import UserImage from '../UserImage';
import { Container, Name } from './styles';

type StoryProps = {
  uri: string;
  name: string;
  hasStory?: boolean;
};

const Story = ({ uri, name, hasStory = false }: StoryProps) => {
  return (
    <Container>
      <UserImage uri={uri} hasStory={hasStory} />

      <Name numberOfLines={1}>{name}</Name>
    </Container>
  );
};

export default Story;
