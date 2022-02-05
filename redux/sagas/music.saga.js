import axios from 'axios';
import { takeLatest, put, select } from 'redux-saga/effects';
import { generatePlaylist, getArtist, selectPlaylistTrackURIs, setArtist } from "../slices/music.slice";
import { selectAuthToken, selectUserID } from '../slices/user.slice';

//  TODO - define endpoints in constants

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

function* requestGeneratePlaylist({ payload }){
    const playlistName = payload;
    const authToken = yield select(selectAuthToken)
    const userID = yield select(selectUserID)
    const trackURIs = yield select(selectPlaylistTrackURIs)

    const config = {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        },
    }
    const body = {
        'playlistName': playlistName,
        'userID': userID,
        'trackURIs': trackURIs
    }

    const response = yield axios.post('api/music/playlist', body, config)
    
    //  TODO - add some success here? setIsPending = false??

}

export function* watchForGetArtist() {
    yield takeLatest(getArtist, requestArtist)
}

export function* watchForGeneratePlaylist() {
    yield takeLatest(generatePlaylist, requestGeneratePlaylist)
}