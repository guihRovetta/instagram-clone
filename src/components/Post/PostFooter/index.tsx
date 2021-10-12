import React, { useState } from 'react';

import { PostType, UserType } from '../../PostList';
import {
  FooterWrapper,
  LikesAmount,
  PostDescription,
  PostUserName,
  ShowCompleteDescriptionButton,
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

const DESCRIPTION_MAX_CHARACTERS = 80;

const PostFooter = ({ user, post }: PostFooterProps) => {
  const { name } = user || {};
  const { likesAmount, description, commentsAmount, createdAt } = post || {};

  const [formattedDescription, setFormattedDescription] = useState(
    `${description?.substring(
      0,
      description?.length > DESCRIPTION_MAX_CHARACTERS
        ? DESCRIPTION_MAX_CHARACTERS
        : description?.length - 1
    )}... `
  );

  const handleShowCompleteDescription = () => {
    setFormattedDescription(description);
  };

  return (
    <FooterWrapper>
      <LikesAmount>{`${likesAmount} curtidas`}</LikesAmount>

      <ShowCompleteDescriptionButton onPress={handleShowCompleteDescription}>
        <PostDescription>
          <PostUserName>{`${name} `}</PostUserName>
          {formattedDescription}
          {formattedDescription !== description && (
            <ShowCompleteDescriptionButtonText>
              mais
            </ShowCompleteDescriptionButtonText>
          )}
        </PostDescription>
      </ShowCompleteDescriptionButton>

      <ShowAllCommentsButton>
        <ShowAllCommentsText>
          {`Ver todos os ${commentsAmount} comentários`}
        </ShowAllCommentsText>
      </ShowAllCommentsButton>

      <BottomLineWrapper>
        <CreatedAt>{createdAt}</CreatedAt>
        <Separator />
        <ShowTranslationButton>
          <ShowTranslationText>Ver tradução</ShowTranslationText>
        </ShowTranslationButton>
      </BottomLineWrapper>
    </FooterWrapper>
  );
};

export default PostFooter;
