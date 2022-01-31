import { getAuthToken, setAuthToken, extractAuthTokenFromUrl, getUserID, selectAuthToken, setUserID } from "../slices/user.slice"
import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { CLIENT_ID } from "../../keys";
import {parseURL} from '../../utils/parseURL'
import { getUniqueID } from "../../utils/getUniqueID";
import { REDIRECT_URI, AUTH_STATE_KEY, SCOPE } from "../../utils/constants";
import { buildAuthURL } from "../../utils/buildAuthURL";

export function* requestAuthToken(){

    const clientID = CLIENT_ID
    const redirectURI = REDIRECT_URI
    const authState = getUniqueID()
    const authStateKey = AUTH_STATE_KEY
    localStorage.setItem(authStateKey, authState);
    const scope = SCOPE;

    const url = buildAuthURL(clientID, scope, redirectURI, authState)
    window.location = url
}

export function* extractAuthToken(){
    const url = window.location.href
    const queryParams = parseURL(url)
    
    const authToken = queryParams['access_token']
    yield put(setAuthToken(authToken))
}

export function* requestUserID(){
    const authToken = yield select(selectAuthToken)
    const config = {
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    }
    const response = yield axios.get('api/user', config)
    yield put(setUserID(response.data.userID))
}

export function* watchForGetAuthToken() {
    yield takeLatest(getAuthToken, requestAuthToken)
}

export function* watchForExtractAuthTokenFromUrl() {
    yield takeLatest(extractAuthTokenFromUrl, extractAuthToken)
}

export function* watchForGetUserID(){
    yield takeLatest(getUserID, requestUserID)
}
