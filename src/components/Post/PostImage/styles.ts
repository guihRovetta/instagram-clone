import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

type PhotoProps = {
  aspectRatio: number;
};

export const Photo = styled.Image<PhotoProps>`
  width: ${windowWidth}px;
  height: ${({ aspectRatio }) => windowWidth / aspectRatio}px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
