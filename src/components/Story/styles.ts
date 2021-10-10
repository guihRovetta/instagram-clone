import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 56px;
  justify-content: center;
  align-items: center;
`;

type NameProps = {
  seenStory?: boolean;
};

export const Name = styled.Text<NameProps>`
  color: ${({ theme, seenStory }) =>
    !seenStory ? theme.colors.text500 : theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;
`;
