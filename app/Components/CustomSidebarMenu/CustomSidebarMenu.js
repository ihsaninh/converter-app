import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="scale-balance" size={75} style={styles.sideMenuProfileIcon} />
      <Text style={styles.sideMenuProfileText}>Unit Converter</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Custom Units" onPress={() => null} />
        <DrawerItem label="Favorites" onPress={() => null} />
        <DrawerItem label="About Us" onPress={() => null} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16
  },
  sideMenuProfileIcon: {
    borderRadius: 100 / 2,
    alignSelf: 'center',
    color: '#3c6382',
    marginTop: 36
  },
  sideMenuProfileText: {
    alignSelf: 'center',
    color: '#3c6382',
    fontSize: 24,
    paddingTop: 8
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { CustomSidebarMenu };
