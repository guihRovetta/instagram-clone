import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Gradient, ProfileImage } from './styles';

export type UserImageProps = {
  uri: string;
  hasStory?: boolean;
  size?: 'small' | 'normal';
  seenStory?: boolean;
};

const UserImage = ({
  uri,
  hasStory = false,
  size = 'normal',
  seenStory = false,
}: UserImageProps) => {
  const theme = useTheme();

  return (
    <Container size={size}>
      <Gradient
        size={size}
        hasStory={hasStory}
        end={{ x: -0.5, y: 0.5 }}
        colors={
          !hasStory
            ? ['transparent', 'transparent']
            : hasStory && !seenStory
            ? [...theme.colors.defaultGradient]
            : [theme.colors.gray200, theme.colors.gray200]
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
