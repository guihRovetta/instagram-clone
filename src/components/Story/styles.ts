import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';
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
  margin-top: 4px;
`;

export const ImageContainer = styled.View``;

export const AddStoryButtonContainer = styled.View`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.blue400};
  border-width: 2.5px;
  border-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const PlusIcon = styled(FontAwesome5)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white100};
`;
