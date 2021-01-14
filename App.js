import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './app/Navigations/RootNavigator/RootNavigator.navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
