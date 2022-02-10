import {call,put,takeLatest} from "redux-saga/effects";
import {fetchTodoApi} from '../../api'
import { GET_TODO_LIST,WATCH_TODO_LIST } from "../../redux/actionTypes";

function* fetchTodoAsyn() {
    const data = yield call(fetchTodoApi);
    yield put({type : GET_TODO_LIST, list:data});
}

export function* watchTodoList() {
    yield takeLatest(WATCH_TODO_LIST,fetchTodoAsyn)
}