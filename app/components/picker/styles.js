import {StyleSheet, Platform} from 'react-native';
import * as common from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  inputContainer: {
    ...Platform.select({
      ios: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      },
    }),
  },
  input: {
    height: 40,
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#ececec',
  },
  separator: {
    height: 1,
    backgroundColor: common.COLOR_BACKGROUND_TAB_SETTING,
  },
});
