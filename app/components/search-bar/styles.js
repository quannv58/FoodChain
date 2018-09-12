import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    height: 47,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3f5fa3',
  },
  searchContainer: {
    marginLeft: 16,
    marginRight: 16,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
    height: '100%',
  },
  iconSearch: {
    marginLeft: 10,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
  cancelButton: {
    marginLeft: 5,
    color: '#fff',
  },
});
