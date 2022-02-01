import { takeLatest, put } from 'redux-saga/effects';
import { generatePlaylist, getArtist, setArtist } from "../slices/music.slice";

function* requestArtist(){
    console.log('requestArtist()')
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