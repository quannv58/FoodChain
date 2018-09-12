import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  titleBlockStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStatusStyle: {
    backgroundColor: '#3db660',
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  titleStyle: {
    fontSize: 16,
    letterSpacing: -0.4,
    fontWeight: 'bold',
  },
  timeDetailContainerStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  approveTimeContainerStyle: {
    flexDirection: 'row',
    marginTop: 5,
  },
  userApproveNameStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    marginLeft: 7,
  },
  dateTimeStyle: {
    fontSize: 14,
    letterSpacing: -0.3,
    marginLeft: 7,
  },
});
