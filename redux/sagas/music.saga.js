import { takeLatest, put } from 'redux-saga/effects';
import { getArtist, setArtist } from "../slices/music.slice";

function* requestArtist(){
} 

export function* watchForGetArtist() {
    yield takeLatest(getArtist, requestArtist)
}