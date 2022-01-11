import { getAuthToken } from "../slices/user.slice"
import { takeLatest } from 'redux-saga/effects';

export function requestAuthToken(){
    console.log('requesting auth token...')
}

export function* watchForGetAuthToken() {
    yield takeLatest(getAuthToken, requestAuthToken)
}