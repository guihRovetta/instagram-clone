import { Feather, AntDesign } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

import LetteringLogo from '../../assets/lettering-logo.svg';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight()}px;
  padding: 0 16px 8px 0;
`;

export const InstagramLogo = styled(LetteringLogo).attrs(({ theme }) => ({
  width: 128,
  height: 36,
  fill: theme?.colors?.text500,
}))``;

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
