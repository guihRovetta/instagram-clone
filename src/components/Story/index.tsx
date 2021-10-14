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

const MY_PROFILE_IMAGE =
  'https://instagram.fsjk1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/46781785_268863693802859_8678401851621638144_n.jpg?_nc_ht=instagram.fsjk1-1.fna.fbcdn.net&_nc_ohc=_lXdXFiVJUsAX8E5aC0&edm=ABfd0MgBAAAA&ccb=7-4&oh=9bb18408d72dce1a7f499bd2ea689887&oe=616FDBAF&_nc_sid=7bff83';

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
