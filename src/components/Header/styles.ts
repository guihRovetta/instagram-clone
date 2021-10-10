import { Feather, AntDesign } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight()}px;
  padding: 0 16px;
`;

export const InstagramLogo = styled.Image`
  width: 128px;
  height: 36px;
  margin-left: -16px;
`;

export const ActionButtonsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.Pressable`
  margin-left: 24px;
`;

const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.text500};
  font-size: 24px;
`;

export const NewPublishIcon = styled(Feather)`
  ${baseIconStyle}
`;

export const ActivityIcon = styled(AntDesign)`
  ${baseIconStyle}
`;

export const MessagesIcon = styled(Feather)`
  ${baseIconStyle}
`;
