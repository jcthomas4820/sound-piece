import axios from 'axios';
import { takeLatest, put, select } from 'redux-saga/effects';
import { generatePlaylist, getArtist, setArtist } from "../slices/music.slice";
import { selectAuthToken } from '../slices/user.slice';

function* requestArtist({ payload }){

    const artistName = payload
    const authToken = yield select(selectAuthToken)
    const config = {
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Artist-Name': artistName,
        }
    }
    const response = yield axios.get('api/music/artist', config)
    const artistData = response.data.artist
    
    yield put(setArtist(artistData))
} 

function* requestGeneratePlaylist(){
    console.log('requestGeneratePlaylist()')
}

export function* watchForGetArtist() {
    yield takeLatest(getArtist, requestArtist)
}

export function* watchForGeneratePlaylist() {
    yield takeLatest(generatePlaylist, requestGeneratePlaylist)
}