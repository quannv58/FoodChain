import {
  Platform,
  Dimensions,
  PixelRatio,
} from 'react-native';

const PLATFORM_OS = Platform.OS;
const DEVICE = Dimensions.get('window');

// system os
const IS_IOS = PLATFORM_OS === 'ios';
const IS_ANDROID = PLATFORM_OS === 'android';

// device size
const DEVICE_WIDTH = DEVICE.width;
const DEVICE_HEIGHT = DEVICE.height;

const PX_RATIO = IS_ANDROID && PixelRatio.get() > 2 ? 2 : PixelRatio.get();

export const Constants = {
  IS_IOS,
  IS_ANDROID,
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  PX_RATIO,
};

let TEST_SERVER_URL = 'ws://localhost:3000/websocket';

export const DEFAULT_LANGUAGE = 'vi';
export const CURRENT_VERSION = '20180226-v1';

export const URL_FILE_SERVER = 'http://file:server';
export const URL_UPLOAD_FILE_SERVER = 'http://api-media.vn/site/upload';
export const URL_DELETE_FILE_SERVER = 'http://api-media.vn/site/del-file';
export const KEY_API_APP = '98CPB8ITIRGHVO3OJ5QT';


// SEVER NEW LIVE
export const BASE_URL = 'http://172.16.10.14:30080/api/v1';

// SEVER OLD LIVE
// export const BASE_URL = 'http://172.16.10.11:30080/api/v1';

// SEVER DEV
// export const BASE_URL = 'http://172.16.10.11:50080/api/v1';


export const API_LOGIN = '/auth/login';

export const TIMEKEEPING_NAVIGATION = 'TimeKeeping';
export const STAFF_NAVIGATION = 'Staff';
export const CHECKOS_NAVIGATION = 'CheckOS';
export const LEAVELIST_NAVIGATION = 'LeaveList';
export const APPROVECHECKOS_NAVIGATION = 'ApproveCheckOS';
export const CONFIRMREQUEST_NAVIGATION = 'ConfirmRequest';
export const CHANGE_PASSWORD = 'ChangePasswordNavi';
export const LOGOUT_NAVIGATION = 'Logout';

export const STATUS_LEAVE = Object.freeze({
  'pending': 'pending',
  'approved': 'approved',
  'rejected': 'rejected',
  // 'cancel_pending': 'cancel_pending',
  // 'cancel_approved': 'cancel_approved',
  // 'cancel_rejected': 'cancel_rejected',
  })


