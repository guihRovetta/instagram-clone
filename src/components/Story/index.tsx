import React, { useState } from 'react';

import UserImage from '../UserImage';
import { Container, Name } from './styles';

type StoryProps = {
  uri: string;
  name: string;
  hasStory?: boolean;
};

const Story = ({ uri, name, hasStory = false }: StoryProps) => {
  const [seenStory, setSeenStory] = useState(false);

  const handlePressStory = () => {
    setSeenStory(true);
  };

  return (
    <Container onPress={handlePressStory}>
      <UserImage uri={uri} hasStory={hasStory} seenStory={seenStory} />

      <Name numberOfLines={1} seenStory={seenStory}>
        {name}
      </Name>
    </Container>
  );
};

export default Story;
