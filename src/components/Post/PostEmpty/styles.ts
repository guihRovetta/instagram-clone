import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoImageIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.text400};
  font-size: ${moderateScale(64)}px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.text400};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.regular}px;
  margin-top: 16px;
`;
