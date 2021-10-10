import React from 'react';

import Story from '../Story';
import { StoryFlatList, StoryFlatListSeparator } from './styles';

export type StoryItemType = {
  name: string;
  uri: string;
  hasStory?: boolean;
};

type StoryListProps = {
  items: StoryItemType[];
};

const StoryList = ({ items }: StoryListProps) => {
  return (
    <StoryFlatList
      data={items}
      keyExtractor={(item) => item?.name}
      renderItem={({ item }) => (
        <Story name={item?.name} uri={item?.uri} hasStory={item?.hasStory} />
      )}
      ItemSeparatorComponent={StoryFlatListSeparator}
    />
  );
};

export default StoryList;
