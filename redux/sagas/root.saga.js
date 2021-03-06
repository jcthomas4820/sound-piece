import { all } from "@redux-saga/core/effects";
import { watchForExtractAuthTokenFromUrl, watchForGetAuthToken, watchForGetUserID } from "./user.saga";
import { watchForGeneratePlaylist, watchForGetArtist } from "./music.saga";

export default function* rootSaga(){
    yield all([
        watchForGetAuthToken(),
        watchForExtractAuthTokenFromUrl(),
        watchForGetArtist(),
        watchForGeneratePlaylist(),
        watchForGetUserID(),
    ])
}