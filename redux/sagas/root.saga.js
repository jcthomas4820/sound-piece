import { all } from "@redux-saga/core/effects";
import { watchForGetAuthToken } from "./user.saga";

export default function* rootSaga(){
    yield all([
        watchForGetAuthToken(),
    ])
}