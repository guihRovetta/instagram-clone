import { moderateScale } from 'react-native-size-matters';

export default {
  colors: {
    background: '#FAFAFA',
    text500: '#262626',
    text400: '#8E8E8E',

    yellow500: '#FEDA77',
    orange500: '#F58529',
    pink500: '#DD2A7B',
    purple500: '#8134AF',
    blue500: '#515BD4',
  },
  fonts: {
    regular: 'Arimo_400Regular',
    medium: 'Arimo_500Medium',
    semibold: 'Arimo_600SemiBold',
    bold: 'Arimo_700Bold',
  },
  fontSize: {
    xxsmall: moderateScale(10),
    small: moderateScale(12),
    regular: moderateScale(16),
    large: moderateScale(20),
    xlarge: moderateScale(24),
  },
};
