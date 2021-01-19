import React from 'react';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomSidebarMenu } from '../../Components/CustomSidebarMenu/CustomSidebarMenu';
import HomeScreen from '../../Containers/Home/Screen/Home.screen';
import ConverterScreen from '../../Containers/Converter/Screen/Converter.screen';

const cardStyle = {
  cardStyle: { backgroundColor: 'white' }
};

const hideShadow = {
  headerStyle: { elevation: 0 }
};

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{ ...cardStyle, ...TransitionPresets.SlideFromRightIOS }}>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          ...hideShadow,
          title: 'Unit Converter'
        }}
      />
    </HomeStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{ title: 'Home' }}
      />
    </Drawer.Navigator>
  );
}

const RootStack = createStackNavigator();

function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{ ...cardStyle, ...TransitionPresets.SlideFromRightIOS }}
      initialRouteName="DrawerScreen">
      <RootStack.Screen
        name="DrawerScreen"
        component={DrawerNavigator}
        options={{
          headerShown: false
        }}
      />
      <RootStack.Screen
        name="ConverterScreen"
        component={ConverterScreen}
        options={({
          route: {
            params: { item }
          }
        }) => ({
          ...hideShadow,
          headerTitleAlign: 'center',
          title: item.name
        })}
      />
    </RootStack.Navigator>
  );
}

export { RootNavigator };
