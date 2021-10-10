import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { Container, Gradient, ProfileImage } from './styles';

export type UserImageProps = {
  uri: string;
  hasStory?: boolean;
  size?: 'small' | 'normal';
};

const UserImage = ({
  uri,
  hasStory = false,
  size = 'normal',
}: UserImageProps) => {
  const theme = useTheme();
  const [seenStory, setSeenStory] = useState(false);

  const handlePressStory = () => {
    setSeenStory(true);
  };

  return (
    <Container size={size} onPress={handlePressStory}>
      <Gradient
        size={size}
        hasStory={hasStory}
        end={{ x: -0.5, y: 0.5 }}
        colors={
          !hasStory
            ? ['transparent', 'transparent']
            : hasStory && !seenStory
            ? [...theme.colors.defaultGradient]
            : [theme.colors.text400, theme.colors.text400]
        }
      >
        <ProfileImage
          source={{
            uri,
          }}
          resizeMode="cover"
          size={size}
        />
      </Gradient>
    </Container>
  );
};

export default UserImage;
