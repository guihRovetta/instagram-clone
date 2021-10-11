import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useStories } from '../../services/hooks/stories/useStories';
import Story from '../Story';
import { StoryFlatList, StoryFlatListSeparator } from './styles';

export type StoryItemType = {
  id: string;
  name: string;
  uri: string;
  hasStory?: boolean;
};

const StoryList = () => {
  const [page, setPage] = useState(0);
  const [stories, setStories] = useState<StoryItemType[]>([]);

  const { data = [], isLoading, isFetching } = useStories(page);

  useEffect(() => {
    if (data?.length === 0) return;

    setStories((previousState) => [...previousState, ...data]);
  }, [data]);

  const handleEndReachedOnStoriesList = () => {
    if (isLoading || isFetching) return;
    setPage((previousValue) => previousValue + 1);
  };

  console.log(stories);

  return (
    <StoryFlatList
      data={stories}
      keyExtractor={(item) => item?.name}
      renderItem={({ item }) => (
        <Story name={item?.name} uri={item?.uri} hasStory={item?.hasStory} />
      )}
      ItemSeparatorComponent={StoryFlatListSeparator}
      onEndReached={handleEndReachedOnStoriesList}
      ListFooterComponent={
        isLoading || isFetching ? <ActivityIndicator /> : null
      }
    />
  );
};

export default StoryList;
