import {StyleSheet} from 'react-native';
import * as common from '../../config/styles';

export default StyleSheet.create({
  container: {
    // height: 50,
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
  titleView: {
    fontSize: 14,
    color: 'rgb(120,131,140)',
  },
  contentView: {
    flex: 1,
  },
  dateContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    color: common.COLOR_TEXT_NORMAL,
    fontSize: common.FONT_SIZE_HEADER,
    fontWeight: common.FONT_WEGHT_CONTENT,
    justifyContent: 'center',
  },
  rightButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: common.COLOR_SEPARATOR,
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

