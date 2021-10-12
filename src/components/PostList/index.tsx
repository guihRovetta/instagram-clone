import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { usePosts } from '../../services/hooks/posts/usePosts';
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
  hashtags?: string[];
};

export type PostItem = {
  user: UserType;
  post: PostType;
  id: string;
};

type PostListProps = {
  children?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
};

const PostList = ({ children }: PostListProps) => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostItem[]>([]);

  const { data = [], isLoading, isFetching } = usePosts(page);

  useEffect(() => {
    if (data?.length === 0) return;

    setPosts((previousState) => [...previousState, ...data]);
  }, [data]);

  const handleEndReachedOnPostList = () => {
    if (isLoading || isFetching) return;
    setPage((previousValue) => previousValue + 1);
  };

  return (
    <PostFlatList
      ListHeaderComponent={children}
      data={posts}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => <Post data={item} />}
      ItemSeparatorComponent={PostFlatListSeparator}
      onEndReached={handleEndReachedOnPostList}
      ListFooterComponent={
        isLoading || isFetching ? <ActivityIndicator /> : null
      }
      ListEmptyComponent={<PostEmpty />}
    />
  );
};

export default PostList;
