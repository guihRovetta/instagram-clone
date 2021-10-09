import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { StoryItemType } from '.';

export const StoryFlatList = styled(
  FlatList as new () => FlatList<StoryItemType>
).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
  },
})`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray100};
`;

export const StoryFlatListSeparator = styled.View`
  margin-right: 16px;
`;
