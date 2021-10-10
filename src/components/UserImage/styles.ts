import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import { UserImageProps } from '.';

export const Container = styled.View<Omit<UserImageProps, 'uri'>>`
  width: ${({ size }) => (size === 'normal' ? '56px' : '28px')};
  justify-content: center;
  align-items: center;
`;

export const Gradient = styled(LinearGradient)<Omit<UserImageProps, 'uri'>>`
  width: 100%;
  height: ${({ size }) => (size === 'normal' ? '56px' : '28px')};
  border-radius: ${({ size }) => (size === 'normal' ? '28px' : '14px')};
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image<Omit<UserImageProps, 'uri'>>`
  width: ${({ size }) => (size === 'normal' ? '52px' : '21px')};
  height: ${({ size }) => (size === 'normal' ? '52px' : '21px')};
  border-radius: ${({ size }) => (size === 'normal' ? '26px' : '10.5px')};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.background};
`;
