import * as common from '../../config/styles';

export default {
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: common.COLOR_BACKGROUND_NABAR,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  userContainer: {
    height: 150,
    flexDirection: 'row',
  },
  userAvatar: {
    height: 62,
    width: 62,
    borderRadius: 31,
    marginTop: 40,
    marginLeft: 15,
  },
  userInfo: {
    marginLeft: 15,
    marginTop: 50,
  },
  userName: {
    fontSize: 18,
    color: common.COLOR_WHITE,
    fontFamily: 'Roboto-Medium',
  },
  userId: {
    fontSize: 14,
    color: common.COLOR_WHITE,
    fontWeight: common.FONT_WEGHT_CONTENT,
  },
  navItemStyle: {
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 10,
    color: common.COLOR_WHITE,
    fontFamily: 'Roboto-Regular',
  },
  navSectionStyle: {
    height: 48,
    flexDirection: 'row',
  },
  navSectionStyleSelected: {
    height: 48,
    flexDirection: 'row',
    backgroundColor: 'rgb(35,61,117)',
  },
  imgCell: {
    height: 18,
    width: 18,
    marginLeft: 20,
    marginTop: 15,
    resizeMode: 'contain',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  selectedView: {
    position: 'absolute',
    backgroundColor: common.COLOR_WHITE,
    height: 48,
    width: 4,
    marginLeft: 1,
  },
  logoutBtn: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    height: 42,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  titleLogout: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: 'rgb(63, 95, 163)',
  },
  textVersion: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    marginLeft: 20,
    marginBottom: 10,
    color: '#fff',
  },
};
