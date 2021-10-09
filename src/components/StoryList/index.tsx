import React from 'react';

import Story from '../Story';
import { StoryFlatList, StoryFlatListSeparator } from './styles';

export type StoryItemType = {
  name: string;
  uri: string;
};

type StoryListProps = {
  items: StoryItemType[];
};

const StoryList = ({ items }: StoryListProps) => {
  return (
    <StoryFlatList
      data={items}
      keyExtractor={(item) => item?.name}
      renderItem={({ item }) => <Story name={item?.name} uri={item?.uri} />}
      ItemSeparatorComponent={StoryFlatListSeparator}
    />
  );
};

export default StoryList;
