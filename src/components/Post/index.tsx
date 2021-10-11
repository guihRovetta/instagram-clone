import React from 'react';

import { PostItem } from '../PostList';
import PostActionButtons from './PostActionButtons';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import { Container } from './styles';

export type PostProps = {
  data: PostItem;
};

const Post = ({ data }: PostProps) => {
  const { user, post } = data || {};

  return (
    <Container>
      <PostHeader user={user} />

      <PostImage image={post?.image} />

      <PostActionButtons />

      <PostFooter user={user} post={post} />
    </Container>
  );
};

export default Post;
