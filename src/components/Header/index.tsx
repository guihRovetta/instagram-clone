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
      <InstagramLogo />

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
