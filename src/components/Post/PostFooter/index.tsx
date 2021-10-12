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
  Hashtag,
} from './styles';

type PostFooterProps = {
  user: UserType;
  post: PostType;
};

const DESCRIPTION_MAX_CHARACTERS = 80;

const getShortDescription = (description: string) => {
  return `${description?.substring(
    0,
    description?.length > DESCRIPTION_MAX_CHARACTERS
      ? DESCRIPTION_MAX_CHARACTERS
      : description?.length - 1
  )}... `;
};

const PostFooter = ({ user, post }: PostFooterProps) => {
  const { name } = user || {};
  const { likesAmount, description, commentsAmount, createdAt, hashtags } =
    post || {};

  const [showCompleteDescription, setShowCompleteDescription] = useState(false);

  const handleShowCompleteDescription = () => {
    setShowCompleteDescription(true);
  };

  return (
    <FooterWrapper>
      <LikesAmount>{`${likesAmount} curtidas`}</LikesAmount>

      <ShowCompleteDescriptionButton onPress={handleShowCompleteDescription}>
        <PostDescription>
          <PostUserName>{`${name} `}</PostUserName>
          {!showCompleteDescription
            ? getShortDescription(description)
            : description}
          {!showCompleteDescription && (
            <ShowCompleteDescriptionButtonText>
              mais
            </ShowCompleteDescriptionButtonText>
          )}
          {showCompleteDescription &&
            hashtags?.map((hashtag) => (
              <Hashtag key={`${name}-${hashtag}`}>{` ${hashtag}`}</Hashtag>
            ))}
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
