import * as types from './types';

export const overlayStateChange = (View) => {
  return {
    type: types.OVERLAY_STATE_CHANGED,
    payload: View,
  };
};

export const showLoading = (isLoading) => {
  return {
    type: types.SHOW_LOADING_ACTION,
    payload: isLoading,
  };
};


