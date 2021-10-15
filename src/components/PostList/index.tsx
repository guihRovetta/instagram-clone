import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { usePosts } from '../../services/hooks/posts/usePosts';
import Post from '../Post';
import PostEmpty from '../Post/PostEmpty';
import {
  PostFlatList,
  PostFlatListSeparator,
  PostEmptyWrapper,
  LoadingWrapper,
} from './styles';

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

type RenderItemType = {
  item: PostItem;
};

const renderItem = ({ item }: RenderItemType) => {
  return <Post data={item} />;
};

const PostList = ({ children }: PostListProps) => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostItem[]>([]);

  const { data = [], isLoading, isFetching } = usePosts(page);

  useEffect(() => {
    if (data?.length === 0) return;
    setPosts((previousState) => [...new Set([...previousState, ...data])]);
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
      renderItem={renderItem}
      ItemSeparatorComponent={PostFlatListSeparator}
      onEndReached={handleEndReachedOnPostList}
      ListFooterComponent={
        isLoading || isFetching ? (
          <LoadingWrapper>
            <ActivityIndicator size="large" />
          </LoadingWrapper>
        ) : null
      }
      ListEmptyComponent={
        <PostEmptyWrapper>
          <PostEmpty />
        </PostEmptyWrapper>
      }
      maxToRenderPerBatch={5}
      initialNumToRender={5}
    />
  );
};

export default PostList;
