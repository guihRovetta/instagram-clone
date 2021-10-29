import React, { useState } from 'react';

import UserImage from '../UserImage';
import {
  Container,
  Name,
  ImageContainer,
  AddStoryButtonContainer,
  PlusIcon,
} from './styles';

type StoryProps = {
  uri: string;
  name: string;
  hasStory?: boolean;
  myStory?: boolean;
};

const MY_PROFILE_IMAGE = 'https://github.com/guihRovetta.png';

const Story = ({
  uri,
  name,
  hasStory = false,
  myStory = false,
}: StoryProps) => {
  const [seenStory, setSeenStory] = useState(false);

  const handlePressStory = () => {
    setSeenStory(true);
  };

  return (
    <Container onPress={handlePressStory}>
      <ImageContainer>
        <UserImage
          uri={!myStory ? uri : MY_PROFILE_IMAGE}
          hasStory={hasStory}
          seenStory={seenStory}
        />
        {myStory && (
          <AddStoryButtonContainer>
            <PlusIcon name="plus" />
          </AddStoryButtonContainer>
        )}
      </ImageContainer>

      <Name numberOfLines={1} seenStory={seenStory}>
        {!myStory ? name : 'Seu Story'}
      </Name>
    </Container>
  );
};

export default Story;
