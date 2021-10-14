import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import { UserImageProps } from '.';

export const Container = styled.View<Omit<UserImageProps, 'uri'>>`
  width: ${({ size }) => (size === 'normal' ? '72px' : '36px')};
  justify-content: center;
  align-items: center;
`;

export const Gradient = styled(LinearGradient)<Omit<UserImageProps, 'uri'>>`
  width: 100%;
  height: ${({ size }) => (size === 'normal' ? '72px' : '36px')};
  border-radius: ${({ size }) => (size === 'normal' ? '36px' : '18px')};
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image<Omit<UserImageProps, 'uri'>>`
  width: ${({ size }) => (size === 'normal' ? '67px' : '33px')};
  height: ${({ size }) => (size === 'normal' ? '67px' : '33px')};
  border-radius: ${({ size }) => (size === 'normal' ? '33.5px' : '16.75px')};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.background};
`;
