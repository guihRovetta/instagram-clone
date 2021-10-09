import React from 'react';

import {
  Container,
  InstagramLogo,
  ActionButtonsWrapper,
  ActionButton,
  NewPublishIcon,
  ActivityIcon,
  MessagesIcon,
} from './styles';

const Header = () => {
  return (
    <Container>
      <InstagramLogo
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png',
        }}
        resizeMode="contain"
      />

      <ActionButtonsWrapper>
        <ActionButton>
          <NewPublishIcon name="plus-square" />
        </ActionButton>

        <ActionButton>
          <ActivityIcon name="hearto" />
        </ActionButton>

        <ActionButton>
          <MessagesIcon name="send" />
        </ActionButton>
      </ActionButtonsWrapper>
    </Container>
  );
};

export default Header;
