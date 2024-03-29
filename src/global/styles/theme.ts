import { moderateScale } from 'react-native-size-matters';

const DEFAULT_THEME_OBJECT = {
  fonts: {
    regular: 'Arimo_400Regular',
    medium: 'Arimo_500Medium',
    semibold: 'Arimo_600SemiBold',
    bold: 'Arimo_700Bold',
  },
  fontSize: {
    xsmall: moderateScale(8),
    small: moderateScale(10),
    regular: moderateScale(12),
    large: moderateScale(16),
    xlarge: moderateScale(24),
  },
  lineHeight: {
    xsmall: moderateScale(8),
    small: moderateScale(10),
    regular: moderateScale(12),
    large: moderateScale(16),
    xlarge: moderateScale(24),
  },
  colors: {
    gray100: '#DBDBDB',
    gray200: '#A9A9A9',

    red500: '#EA1D2C',
    blue400: '#0195F7',
    blue500: '#125688',
    white100: '#FFFFFF',

    defaultGradient: ['#DD2A7B', '#F58529', '#FEDA77'],
  },
};

export const lightTheme = {
  ...DEFAULT_THEME_OBJECT,
  colors: {
    ...DEFAULT_THEME_OBJECT?.colors,
    background: '#FAFAFA',
    text500: '#262626',
    text400: '#8E8E8E',
  },
};

export const darkTheme = {
  ...DEFAULT_THEME_OBJECT,
  colors: {
    ...DEFAULT_THEME_OBJECT?.colors,
    background: '#000000',
    text500: '#FFFFFF',
    text400: '#EBEBF5',
  },
};
