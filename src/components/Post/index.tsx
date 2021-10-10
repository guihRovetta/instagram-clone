import React, { useState } from 'react';

import { PostItem } from '../PostList';
import UserImage from '../UserImage';
import {
  Container,
  Header,
  TitleWrapper,
  NameLocationWrapper,
  Name,
  Location,
  MoreButton,
  MoreIcon,
  PostImage,
  ActionButtonsWrapper,
  LeftWrapper,
  ActionLeftButton,
  RightWrapper,
  HeartOutlinedIcon,
  HeartFilledIcon,
  CommentIcon,
  SendMessageIcon,
  ActionRightButton,
  CollectionIcon,
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

export type PostProps = {
  data: PostItem;
};

const Post = ({ data }: PostProps) => {
  const { user, post } = data || {};

  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToCollection, setIsAddedToCollection] = useState(false);

  const handlePressLikeButton = () => {
    setIsLiked((previousValue) => !previousValue);
  };

  const handlePressAddToCollectionButton = () => {
    setIsAddedToCollection((previousValue) => !previousValue);
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <UserImage
            hasStory={user?.hasStory}
            size="small"
            uri={user?.image?.uri}
          />

          <NameLocationWrapper>
            <Name>{user?.name}</Name>
            {user?.location && <Location>{user?.location}</Location>}
          </NameLocationWrapper>
        </TitleWrapper>

        <MoreButton>
          <MoreIcon name="more-horizontal" />
        </MoreButton>
      </Header>

      <PostImage
        source={{
          uri: post?.image?.uri,
        }}
        resizeMode="cover"
        aspectRatio={post?.image?.aspectRation || 1}
      />

      <ActionButtonsWrapper>
        <LeftWrapper>
          <ActionLeftButton onPress={handlePressLikeButton}>
            {!isLiked ? (
              <HeartOutlinedIcon name="hearto" />
            ) : (
              <HeartFilledIcon name="heart" />
            )}
          </ActionLeftButton>
          <ActionLeftButton>
            <CommentIcon name="chatbubble-outline" />
          </ActionLeftButton>
          <ActionLeftButton>
            <SendMessageIcon name="send" />
          </ActionLeftButton>
        </LeftWrapper>

        <RightWrapper>
          <ActionRightButton onPress={handlePressAddToCollectionButton}>
            <CollectionIcon
              name={!isAddedToCollection ? 'bookmark-o' : 'bookmark'}
            />
          </ActionRightButton>
        </RightWrapper>
      </ActionButtonsWrapper>

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
    </Container>
  );
};

export default Post;
