import { StyleSheet } from 'react-native';

import { Colors } from '../../../Themes/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  resultContainer: {
    flex: 3,
    padding: 16,
  },
  inputContainer: {
    flex: 4,
    backgroundColor: Colors.gallery,
  },
  resultText: {
    color: 'black',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  dropdownWrapper: {
    flexDirection: 'row',
  },
  dropDownStart: {
    flex: 1,
    justifyContent: 'center',
  },
  dropDownEnd: {
    flex: 8,
  },
  dropDownTitle: {
    fontWeight: 'bold',
    color: Colors.dustyGray,
  },
  labelStyle: {
    color: Colors.tundora,
    textAlign: 'right',
  },
  firstValue: {
    color: 'grey',
    fontSize: 35,
    textAlign: 'right',
  },
  gap: {
    marginVertical: 30,
  },
  result: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  resultTitle: {
    color: 'grey',
    fontSize: 16,
  },
  resultNumber: {
    color: 'grey',
    fontSize: 40,
  },
});

export { Styles };
