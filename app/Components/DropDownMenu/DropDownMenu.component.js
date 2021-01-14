import React from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownMenu = ({ items, onChangeItem, defaultValue, placeholder }) => {
  return (
    <DropDownPicker
      items={items}
      placeholder={placeholder}
      containerStyle={Styles.containerStyle}
      style={Styles.dropDown}
      labelStyle={Styles.labelStyle}
      itemStyle={Styles.itemStyle}
      dropDownStyle={Styles.dropdownStyle}
      onChangeItem={onChangeItem}
      defaultValue={defaultValue}
    />
  );
};

const Styles = StyleSheet.create({
  itemStyle: {
    justifyContent: 'flex-end',
  },
  containerStyle: {
    height: 45,
  },
  dropDown: {
    backgroundColor: '#f1f1f1',
    borderWidth: 0,
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
    justifyContent: 'flex-end',
  },
  labelStyle: {
    color: '#444',
    textAlign: 'right',
  },
});

export { DropDownMenu };
