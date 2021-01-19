import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { Colors } from '../../Themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItemHorizontal = ({ icon, name, onPress }) => {
  return (
    <View style={Styles.itemContainer}>
      <View style={Styles.itemContent}>
        <Pressable
          onPress={onPress}
          style={Styles.button}
          android_ripple={{ color: 'rgba(0, 0, 0, 0.2)', borderless: true }}>
          <Icon name={icon} size={30} color={Colors.tundora} />
          <Text style={Styles.textName}>{name}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export { ListItemHorizontal };

const Styles = StyleSheet.create({
  itemContainer: {
    flex: 1 / 3,
    flexDirection: 'column',
    marginBottom: 16
  },
  itemContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textName: {
    fontSize: 16,
    paddingTop: 8,
    color: Colors.tundora
  },
  button: {
    borderRadius: 100,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
