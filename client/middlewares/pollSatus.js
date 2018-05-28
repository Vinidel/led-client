import {call, put, takeLatest, race} from 'redux-saga/effects';
import {fetchStatus, fetchStatusSuccess} from '../actionCreators';

function* pollSagaWorker(action) {
  while (true) {
    try {
      const {data} = yield call(fetchStatus);
      yield put(fetchStatusSuccess(data.status));
      yield call(delay, 4000);
    } catch (err) {
      yield put({type: 'FETCH_STATUS_FAILED'});
    }
  }
}

/**
 * Saga watcher.
 */
export function* pollSagaWatcher() {
  while (true) {
    yield race([call(pollSagaWorker), take('POLL_STOP')]);
  }
}
