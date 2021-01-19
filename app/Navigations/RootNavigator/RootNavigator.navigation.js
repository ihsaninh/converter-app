import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import HomeScreen from '../../Containers/Home/Screen/Home.screen';
import ConverterScreen from '../../Containers/Converter/Screen/Converter.screen';

const Stack = createStackNavigator();

const cardStyle = {
  cardStyle: { backgroundColor: 'white' },
};

const hideElevation = {
  headerStyle: { elevation: 0 },
};

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ ...cardStyle, ...TransitionPresets.SlideFromRightIOS }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          ...hideElevation,
          title: 'Unit Converter',
        }}
      />
      <Stack.Screen
        name="ConverterScreen"
        component={ConverterScreen}
        options={({
          route: {
            params: { item },
          },
        }) => ({
          ...hideElevation,
          headerTitleAlign: 'center',
          title: item.name,
        })}
      />
    </Stack.Navigator>
  );
}

export { RootNavigator };
