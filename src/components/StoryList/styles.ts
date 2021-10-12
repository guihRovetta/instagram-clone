import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { StoryItemType } from '.';
import { convertHexToRGBA } from '../../utils/convertHexToRGBA';

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
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => convertHexToRGBA(theme.colors.gray200, 0.2)};
`;

export const StoryFlatListSeparator = styled.View`
  margin-right: 16px;
`;
