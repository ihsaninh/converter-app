import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    flex: 1,
    padding: 16,
  },
  contentSection: {
    flex: 4,
  },
  row: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
  },
  textTitle: {
    paddingLeft: 16,
    fontSize: 23,
    paddingTop: 3,
    fontWeight: '700',
    color: 'black',
  },
  textSubtitle: {
    paddingLeft: 16,
    fontSize: 14,
    paddingTop: 3,
    color: 'salmon',
  },
  itemContainer: {
    flex: 1 / 3,
    flexDirection: 'column',
    marginBottom: 16,
  },
  itemContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontSize: 16,
    paddingTop: 8,
    color: '#444',
  },
  button: {
    borderRadius: 100,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Styles };