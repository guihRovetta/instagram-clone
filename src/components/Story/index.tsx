import React from 'react';

import { Container, Gradient, ProfileImage } from './styles';

type StoryProps = {
  uri: string;
};

const Story = ({ uri }: StoryProps) => {
  return (
    <Container>
      <Gradient>
        <ProfileImage
          source={{
            uri,
          }}
        />
      </Gradient>
    </Container>
  );
};

export default Story;
