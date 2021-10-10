import { Feather, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
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
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.small}px;
`;

export const Location = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ theme }) => theme.lineHeight.small}px;
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

type PostImageProps = {
  aspectRatio: number;
};

export const PostImage = styled.Image<PostImageProps>`
  width: ${windowWidth}px;
  height: ${({ aspectRatio }) => windowWidth / aspectRatio}px;
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
