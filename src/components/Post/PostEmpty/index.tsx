import React from 'react';

import { Container, NoImageIcon, Message } from './styles';

const PostEmpty = () => {
  return (
    <Container>
      <NoImageIcon name="image-off-outline" />
      <Message>Sem vídeos ou fotos ainda!</Message>
    </Container>
  );
};

export default PostEmpty;
