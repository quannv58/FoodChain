import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerBackStyle: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
  },
  titleStyle: {
    color: '#222223',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentStyle: {
    color: '#373738',
    fontSize: 14,
  },
  imageStyle: {
    width: 60,
    height: 80,
  },
  statusContainerStyle: {
    position: 'absolute',
    right: 0, top: 0,
    marginTop: 12,
    marginRight: 15,
  },
  statusTextStyle: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 0.3,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  checkingImageStyle: {
    width: 60,
    height: 60,
  },
  timeContainerStyle: {
    flexDirection: 'row',
    marginTop: 4,
  },
  dateTimeStyle: {
    fontSize: 14,
    letterSpacing: -0.3,
    marginLeft: 7,
  },
  locationContainerStyle: {
    flexDirection: 'row',
    marginTop: 3,
  },
});
