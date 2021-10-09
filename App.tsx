import {
  Arimo_400Regular,
  Arimo_500Medium,
  Arimo_600SemiBold,
  Arimo_700Bold,
  useFonts,
} from '@expo-google-fonts/arimo';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/global/styles/theme';

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
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: theme.fonts.bold }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
