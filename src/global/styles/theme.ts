import { moderateScale } from 'react-native-size-matters';

export default {
  colors: {
    background: '#FAFAFA',
    text500: '#262626',
    text400: '#8E8E8E',

    gray100: '#DBDBDB',
    gray200: '#A9A9A9',

    defaultGradient: ['#DD2A7B', '#F58529', '#FEDA77'],
  },
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
};
