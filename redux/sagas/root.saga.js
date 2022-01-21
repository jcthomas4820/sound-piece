import { all } from "@redux-saga/core/effects";
import { watchForExtractAuthTokenFromUrl, watchForGetAuthToken } from "./user.saga";
import { watchForGetArtist } from "./music.saga";

export default function* rootSaga(){
    yield all([
        watchForGetAuthToken(),
        watchForExtractAuthTokenFromUrl(),
        watchForGetArtist()
    ])
}