import {all, fork} from 'redux-saga/effects';
import * as Authens from './authen';

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(Authens)
    ].map(fork)
  );
}
