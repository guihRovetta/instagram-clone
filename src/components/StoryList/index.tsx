import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useStories } from '../../services/hooks/stories/useStories';
import Story from '../Story';
import {
  StoryFlatList,
  StoryFlatListSeparator,
  LoadingWrapper,
} from './styles';

export type StoryItemType = {
  id: string;
  name: string;
  uri: string;
  hasStory?: boolean;
};

type RenderItemType = {
  item: StoryItemType;
  index: number;
};

const renderItem = ({ item, index }: RenderItemType) => {
  return (
    <Story
      name={item?.name}
      uri={item?.uri}
      hasStory={index === 0 ? false : item?.hasStory}
      myStory={index === 0}
    />
  );
};

const StoryList = () => {
  const [page, setPage] = useState(0);
  const [stories, setStories] = useState<StoryItemType[]>([]);

  const { data = [], isLoading, isFetching } = useStories(page);

  useEffect(() => {
    if (data?.length === 0) return;
    setStories((previousState) => [...new Set([...previousState, ...data])]);
    // setStories([]);
  }, [data]);

  const handleEndReachedOnStoriesList = () => {
    if (isLoading || isFetching) return;
    setPage((previousValue) => previousValue + 1);
  };

  return (
    <StoryFlatList
      data={stories}
      keyExtractor={(item) => item?.id}
      renderItem={renderItem}
      ItemSeparatorComponent={StoryFlatListSeparator}
      onEndReached={handleEndReachedOnStoriesList}
      ListFooterComponent={
        isLoading || isFetching ? (
          <LoadingWrapper>
            <ActivityIndicator />
          </LoadingWrapper>
        ) : null
      }
    />
  );
};

export default StoryList;
