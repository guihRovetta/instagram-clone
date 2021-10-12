import styled from 'styled-components/native';

export const FooterWrapper = styled.View`
  padding: 0 12px;
`;

export const LikesAmount = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.regular}px;
  margin: 2px 0 4px 0;
`;

export const PostDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.large}px;
`;

export const PostUserName = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.large}px;
`;

export const ShowCompleteDescriptionButton = styled.Pressable``;

export const ShowCompleteDescriptionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.large}px;
`;

export const ShowAllCommentsButton = styled.View`
  margin: 4px 0;
`;

export const ShowAllCommentsText = styled.Text`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.regular}px;
  margin: 2px 0;
`;

export const ShowTranslationButton = styled.View``;

export const ShowTranslationText = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.small}px;
`;

export const BottomLineWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const CreatedAt = styled.Text`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.small}px;
`;

export const Separator = styled.View`
  margin: 0 6px;
  height: 3px;
  width: 3px;
  border-radius: 1.5px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const Hashtag = styled.Text`
  color: ${({ theme }) => theme.colors.blue500};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.large}px;
`;
