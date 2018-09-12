import {StyleSheet} from 'react-native';

const errorColor = '#FF0000';
const borderColor = '#b6bec5';

export default StyleSheet.create({
  titleStyle: {
    fontSize: 15,
    letterSpacing: 0.4,
  },
  textContainerStyle: {
    height: 48,
    justifyContent: 'center',
  },
  textInputStyle: {
    width: 300,
    fontSize: 18,
    flex: 1,
  },
  eyeButtonStyle: {
    position: 'absolute',
    height: 22,
    right: 5,
    justifyContent: 'center',
  },
  eyeImageStyle: {
    width: 22,
    height: 18,
    resizeMode: 'contain',
  },
  errorTitleStyle: {
    fontSize: 12,
    marginTop: 6,
    color: errorColor,
    alignSelf: 'flex-start',
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: borderColor,
  },
  deleteImageStyle: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
  },

});

export const IC_EYE_HIDE = require('../../../assets/images/icView.png');
export const IC_EYE_SHOW = require('../../../assets/images/icViewNot.png');
export const IC_DELETE = require('../../../assets/images/icDelete.png');
