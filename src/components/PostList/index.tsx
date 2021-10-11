import React from 'react';
import { ActivityIndicator } from 'react-native';

import Post from '../Post';
import PostEmpty from '../Post/PostEmpty';
import { PostFlatList, PostFlatListSeparator } from './styles';

export type ImageType = {
  uri: string;
  aspectRatio: number;
};

export type UserType = {
  name: string;
  location?: string;
  image: ImageType;
  hasStory?: boolean;
};

export type PostType = {
  image: ImageType;
  likesAmount?: number;
  description: string;
  commentsAmount?: number;
  createdAt: string;
};

export type PostItem = {
  user: UserType;
  post: PostType;
  id: string;
};

type PostListProps = {
  items: PostItem[];
  children?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  onEndReached: () => void;
  isLoading?: boolean;
};

const PostList = ({
  items,
  children,
  onEndReached,
  isLoading = false,
}: PostListProps) => {
  return (
    <PostFlatList
      ListHeaderComponent={children}
      data={items}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => <Post data={item} />}
      ItemSeparatorComponent={PostFlatListSeparator}
      onEndReached={onEndReached}
      ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
      ListEmptyComponent={<PostEmpty />}
    />
  );
};

export default PostList;
