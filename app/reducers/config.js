import * as types from '../actions/types';

const initialState = {
  language: 'vn',
  notification: true,
  theme: 'light-theme',
  vibrate: false,
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
