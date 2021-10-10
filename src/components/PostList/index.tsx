import React from 'react';

import Post from '../Post';
import { PostFlatList, PostFlatListSeparator } from './styles';

type UserType = {
  name: string;
  location?: string;
  image: Image;
  hasStory?: boolean;
};

type Image = {
  uri: string;
  aspectRation?: 0.8 | 1 | 1.91;
};

type PostType = {
  image: Image;
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
};

const PostList = ({ items, children }: PostListProps) => {
  return (
    <PostFlatList
      ListHeaderComponent={children}
      data={items}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => <Post data={item} />}
      ItemSeparatorComponent={PostFlatListSeparator}
    />
  );
};

export default PostList;
