import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 2,
    left: 0,
    right: 0,
    // bottom: 1,
    // backgroundColor: '#00000099',
    borderColor: 'rgb(182,190,197)',
    borderWidth: 1,
    // zIndex: 1,

  },
  rowSeparator: {
    backgroundColor: '#dee2e9',
    height: 1,
  },
  rowContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  rowTitle: {
    flex: 1,
    fontSize: 16,
    color: '#808080',
    marginLeft: 15,
    fontFamily: 'Roboto-Regular',
  },
  rowTitleSelected: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#3f5fa3',
    marginLeft: 15,
  },
});
