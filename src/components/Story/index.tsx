import React from 'react';

import { Container, Gradient, ProfileImage, Name } from './styles';

type StoryProps = {
  uri: string;
  name: string;
};

const Story = ({ uri, name }: StoryProps) => {
  return (
    <Container>
      <Gradient>
        <ProfileImage
          source={{
            uri,
          }}
        />
      </Gradient>

      <Name numberOfLines={1}>{name}</Name>
    </Container>
  );
};

export default Story;
