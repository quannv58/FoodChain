'use strick';

import {GET, POST} from './index';

export function login(body) {
  let url = '/user/auth/login';
  return POST(url, body);
}

export function forgot(body) {
  let url = '/user/auth/forgot';
  return POST(url, body);
}

export function refreshToken() {
  let url = '/user/auth/refreshToken';
  return GET(url);
}

export function changePassword(body) {
  let url = '/user/changePassword';
  return POST(url, body);
}
