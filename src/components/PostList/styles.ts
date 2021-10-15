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

export const PostEmptyWrapper = styled.View`
  margin-top: 24px;
`;

export const LoadingWrapper = styled.View`
  margin-top: 24px;
  align-items: center;
  justify-content: center;
`;
