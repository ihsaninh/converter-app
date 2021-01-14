import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ConverterScreen from '../../Containers/Converter/Screen/Converter.screen';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConverterScreen"
        component={ConverterScreen}
        options={{
          headerStyle: { elevation: 0 },
          headerTitleAlign: 'center',
          title: 'Weight',
        }}
      />
    </Stack.Navigator>
  );
}

export { RootNavigator };
