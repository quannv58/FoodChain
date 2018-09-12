import {
  takeLatest, put,
} from 'redux-saga/effects';
import * as types from '../actions/types';
import {login} from '../api/authen';

function* doLogin(action) {
  try {
    let body = {
      username: action.user,
      password: action.pass,
    };
    const respone = yield login(body);
    // if (respone.getStatus_code() === 200) {
    //   yield put({type: types.LOGIN_SUCCESS, payload: respone});
    // } else {
    //   yield put({type: types.LOGIN_FAIL, payload: respone});
    // }
  } catch (e) {
    console.log(e);
    // yield put({type: types.LOGIN_FAIL});
  }
}
export function* watchLoginAction() {
  yield takeLatest(types.LOGIN_ACTION, doLogin);
}
