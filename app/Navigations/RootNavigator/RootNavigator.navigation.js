import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../../Containers/Home/Screen/Home.screen';
import ConverterScreen from '../../Containers/Converter/Screen/Converter.screen';

const Stack = createStackNavigator();

const cardStyle = {
  cardStyle: { backgroundColor: 'white' },
};

const hideElevation = {
  headerStyle: { elevation: 0 },
};

const headerRightStyle = { marginRight: 16 };

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
          headerRight: (props) => (
            <Icon
              {...props}
              name="dots-vertical"
              size={22}
              color="#444"
              style={{ ...headerRightStyle }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ConverterScreen"
        component={ConverterScreen}
        options={({ route }) => ({
          ...hideElevation,
          headerTitleAlign: 'center',
          title: route.params.item.name,
        })}
      />
    </Stack.Navigator>
  );
}

export { RootNavigator };
