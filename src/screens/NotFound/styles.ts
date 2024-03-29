import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.large}px;
`;
