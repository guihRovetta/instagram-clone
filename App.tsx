import {
  Arimo_400Regular,
  Arimo_500Medium,
  Arimo_600SemiBold,
  Arimo_700Bold,
  useFonts,
} from '@expo-google-fonts/arimo';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { LogBox } from 'react-native';
import { QueryClientProvider } from 'react-query';

import { ThemeModeProvider } from './src/context/ThemeModeContext';
import Root from './src/screens/Root';
import { queryClient } from './src/services/react-query';

export default function App() {
  const [fontsLoaded] = useFonts({
    Arimo_400Regular,
    Arimo_500Medium,
    Arimo_600SemiBold,
    Arimo_700Bold,
  });

  LogBox.ignoreLogs(['Setting a timer']);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeModeProvider>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </ThemeModeProvider>
  );
}
