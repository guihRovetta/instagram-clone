import { Feather, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.text500};
  font-size: 24px;
`;

export const ActionButtonsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
`;

export const LeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionLeftButton = styled.Pressable`
  margin-right: 12px;
`;

export const RightWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeartOutlinedIcon = styled(AntDesign)`
  ${baseIconStyle}
`;

export const HeartFilledIcon = styled(AntDesign)`
  ${baseIconStyle}
  color: ${({ theme }) => theme.colors.red500};
`;

export const CommentIcon = styled(Ionicons)`
  ${baseIconStyle}
`;

export const SendMessageIcon = styled(Feather)`
  ${baseIconStyle}
`;

export const ActionRightButton = styled.Pressable``;

export const CollectionIcon = styled(FontAwesome)`
  ${baseIconStyle}
`;
