import React from 'react';

import { ImageType } from '../../PostList';
import { Photo } from './styles';

type PostImageProps = {
  image: ImageType;
};

const PostImage = ({ image }: PostImageProps) => {
  return (
    <Photo
      source={{
        uri: image?.uri,
      }}
      resizeMode="cover"
      aspectRatio={image?.aspectRatio || 1}
    />
  );
};

export default PostImage;
