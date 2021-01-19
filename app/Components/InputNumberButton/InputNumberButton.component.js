import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputNumberButton = ({ value, onPress, type }) => {
  return (
    <View style={Styles.container}>
      {value === '' ? null : (
        <Pressable
          onPress={onPress}
          style={Styles.button}
          android_ripple={{ color: 'rgba(0, 0, 0, 0.2)', borderless: true }}>
          {value === 'DEL' ? (
            <Icon name="backspace-outline" style={Styles.icon} />
          ) : value === 'PLUS-MINUS' ? (
            <Icon name="plus-minus-variant" style={Styles.icon} />
          ) : (
            <Text style={Styles.text}>{value}</Text>
          )}
        </Pressable>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 25
  },
  icon: {
    color: 'black',
    fontSize: 22
  },
  button: {
    borderRadius: 100,
    padding: 6,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { InputNumberButton };
