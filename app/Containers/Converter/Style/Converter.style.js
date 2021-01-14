import { StyleSheet } from 'react-native';

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
    backgroundColor: '#eee',
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
    color: '#999',
  },
  labelStyle: {
    color: '#444',
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
