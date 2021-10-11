import React, { useState } from 'react';

import {
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
} from './styles';

const PostActionButtons = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToCollection, setIsAddedToCollection] = useState(false);

  const handlePressLikeButton = () => {
    setIsLiked((previousValue) => !previousValue);
  };

  const handlePressAddToCollectionButton = () => {
    setIsAddedToCollection((previousValue) => !previousValue);
  };

  return (
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
  );
};

export default PostActionButtons;
