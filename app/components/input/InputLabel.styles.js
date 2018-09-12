import {StyleSheet} from 'react-native';
import * as common from '../../config/styles';

export default StyleSheet.create({
  container: {
    // paddingVertical: 8,
  },
  titleView: {
    fontSize: 16,
    color: 'rgb(182,190,197)',
  },
  view: {
    backgroundColor: 'transparent',
  },
  viewFocus: {
    backgroundColor: common.COLOR_SEPARATOR,
  },
  viewError: {
    backgroundColor: common.COLOR_SEPARATOR_TABBAR,
  },
  TextInput: {
    flex: 1,
    color: common.COLOR_TEXT_NORMAL,
    fontSize: 16,
    fontWeight: common.FONT_WEGHT_CONTENT,
    paddingVertical: 8,
  },
  rightButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: common.COLOR_BACKGROUND_TAB_SETTING,
  },
  txtError: {
    fontSize: common.FONT_SIZE_CONTENT,
    fontWeight: common.FONT_WEGHT_CONTENT,
    color: common.COLOR_SEPARATOR_TABBAR,
    marginTop: 2,
    alignSelf: 'flex-start',
    marginLeft: 12,
  },
});
