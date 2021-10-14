import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameLocationWrapper = styled.View`
  margin-left: 8px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.regular}px;
`;

export const Location = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.regular}px;
  margin-top: 2px;
`;

export const MoreButton = styled.Pressable``;

const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.text500};
  font-size: 20px;
`;

export const MoreIcon = styled(Feather)`
  ${baseIconStyle}
`;
