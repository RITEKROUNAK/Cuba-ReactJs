import {call,put, takeLatest} from "redux-saga/effects";
import { fetchBookmaekApi } from "../../api";
import { GET_BOOKMARK_LIST,WATCH_BOOKMARK_LIST } from "../../redux/actionTypes";

function* fetchBookmarkAsyn() {
    const Data = yield call(fetchBookmaekApi);
    yield put({type : GET_BOOKMARK_LIST,bookmark:Data});
}

export function* watchBookmarkList() {
    yield takeLatest(WATCH_BOOKMARK_LIST,fetchBookmarkAsyn)
}