import { LOCATION_CHANGE } from 'react-router-redux';
import { fork, put, select, take, takeLatest } from 'redux-saga/effects';
import { Map } from 'immutable';
// import request from 'utils/request';

import {
  dropSuccess,
  getDataSuccess,
} from './actions';
import {
  GET_DATA,
  ON_DROP,
  ON_SEARCH,
} from './constants';
import { makeSelectSearch } from './selectors';

function* dataGet() {
  try {
    const entriesNumber = 100;
    const data = [
      Map({
        type: 'pdf',
        hash: '1234',
        name: 'avatar.pdf',
        updatedAt: '20/11/2017',
        size: '24 B',
        relatedTo: 'John Doe',
        url: 'www.google.com',
      }),
    ];

    yield put(getDataSuccess(data, entriesNumber));
    // TODO: prepare for API call
    // const data = yield [
    //   call(request, 'PATH', { method: 'GET' }),
    //   call(request, 'PATH', { method: 'GET' }),
    // ];
  } catch(err) {
    strapi.notification.error('notification.error');
  }
}

function* uploadFiles(action) {
  try {
    const files = action.files;

    const newFiles = [
      Map({
        type: 'pdf',
        hash: '12345',
        name: 'avatar1.pdf',
        updatedAt: '20/11/2017',
        size: '24 B',
        relatedTo: 'John Doe',
        url: 'www.google.com',
      }),
    ];

    console.log('n', newFiles);
    yield put(dropSuccess(newFiles));

    if (newFiles.length > 1) {
      strapi.notification.success({ id: 'upload.notification.dropFile.success' });
    } else {
      strapi.notification.success({ id: 'upload.notification.dropFiles.success', values: { number: newFiles.length } });
    }

  } catch(err) {
    console.log(err);
  }
}

function* search() {
  try {
    const search = yield select(makeSelectSearch());
    console.log('will search', search);
  } catch(err) {
    console.log(err);
  }
}


// Individual exports for testing
export function* defaultSaga() {
  yield fork(takeLatest, ON_DROP, uploadFiles);
  yield fork(takeLatest, ON_SEARCH, search);

  const loadDataWatcher = yield fork(takeLatest, GET_DATA, dataGet);

  yield take(LOCATION_CHANGE);

  yield cancel(loadDataWatcher);
}

// All sagas to be loaded
export default defaultSaga;
