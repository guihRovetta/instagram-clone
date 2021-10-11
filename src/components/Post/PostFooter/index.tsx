import React from 'react';

import { PostType, UserType } from '../../PostList';
import {
  FooterWrapper,
  LikesAmount,
  PostDescription,
  PostUserName,
  ShowCompleteDescriptionButtonText,
  ShowAllCommentsButton,
  ShowAllCommentsText,
  BottomLineWrapper,
  ShowTranslationButton,
  ShowTranslationText,
  CreatedAt,
  Separator,
} from './styles';

type PostFooterProps = {
  user: UserType;
  post: PostType;
};

const PostFooter = ({ user, post }: PostFooterProps) => {
  return (
    <FooterWrapper>
      <LikesAmount>{`${post?.likesAmount} curtidas`}</LikesAmount>

      <PostDescription numberOfLines={2}>
        <PostUserName>{`${user?.name} `}</PostUserName>
        {`${post?.description} `}
        <ShowCompleteDescriptionButtonText>
          mais
        </ShowCompleteDescriptionButtonText>
      </PostDescription>

      <ShowAllCommentsButton>
        <ShowAllCommentsText>
          {`Ver todos os ${post?.commentsAmount} comentários`}
        </ShowAllCommentsText>
      </ShowAllCommentsButton>

      <BottomLineWrapper>
        <CreatedAt>{post?.createdAt}</CreatedAt>
        <Separator />
        <ShowTranslationButton>
          <ShowTranslationText>Ver tradução</ShowTranslationText>
        </ShowTranslationButton>
      </BottomLineWrapper>
    </FooterWrapper>
  );
};

export default PostFooter;
