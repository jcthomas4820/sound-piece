import { getAuthToken, setAuthToken } from "../slices/user.slice"
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { useDispatch } from "react-redux";

export function* requestAuthToken(){
    const response = yield axios.get('api/auth')
    const authToken = response.data.authToken
    yield put(setAuthToken(authToken))
}

export function* watchForGetAuthToken() {
    yield takeLatest(getAuthToken, requestAuthToken)
}