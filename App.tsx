import {
  Arimo_400Regular,
  Arimo_500Medium,
  Arimo_600SemiBold,
  Arimo_700Bold,
  useFonts,
} from '@expo-google-fonts/arimo';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/global/styles/theme';
import Routes from './src/routes';
import { queryClient } from './src/services/react-query';

export default function App() {
  const [fontsLoaded] = useFonts({
    Arimo_400Regular,
    Arimo_500Medium,
    Arimo_600SemiBold,
    Arimo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
