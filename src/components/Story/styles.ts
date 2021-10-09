import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.Pressable``;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [...theme.colors.defaultGradient],
  end: { x: -0.5, y: 0.5 },
}))`
  width: 56px;
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
