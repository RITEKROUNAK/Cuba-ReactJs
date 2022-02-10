import {call,put,takeLatest} from "redux-saga/effects";
import {fetchTaskApi} from '../../api'
import {WATCH_TASK_LIST} from '../actionTypes'
import {getAllTask} from './action'

function* fetchTaskAsyn() {
    const taskList = yield call(fetchTaskApi);
    yield put(getAllTask(taskList.data));
}

export function* watcherTaskApp() {
    yield takeLatest(WATCH_TASK_LIST,fetchTaskAsyn)
}