import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 56px;
  justify-content: center;
  align-items: center;
`;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [...theme.colors.defaultGradient],
  end: { x: -0.5, y: 0.5 },
}))`
  width: 100%;
  height: 56px;
  border-radius: 56px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image.attrs({ resizeMode: 'cover' })`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.background};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text500};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;
`;
