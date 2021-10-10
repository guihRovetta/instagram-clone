import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { PostItem } from '.';

export const PostFlatList = styled(
  FlatList as new () => FlatList<PostItem>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 16,
  },
})``;

export const PostFlatListSeparator = styled.View`
  margin-bottom: 16px;
`;
