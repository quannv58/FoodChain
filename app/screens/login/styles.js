import {StyleSheet} from 'react-native';
import * as common from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: common.COLOR_TEXT_NORMAL,
  },
  images: {
    marginBottom: 97,
  },
  buttonstyle: {
    width: 300,
    height: 42,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 66,
  },
  input: {
    marginBottom: 24,
  },
  forgot: {
    marginTop: 24,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotpass: {
    color: '#515253',
    fontSize: 14,
  },
});
