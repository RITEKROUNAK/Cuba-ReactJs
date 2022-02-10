import {call,put,takeLatest} from "redux-saga/effects";
import {fetchEmailApi} from '../../api'
import {WATCH_EMAIL,WATCH_ALL_TYPE_EMAIL,GET_ALL_EMAIL_ASYN,GET_ALL_TYPE_ASYN} from '../../redux/actionTypes'
import {getAllEmails,getAllTypes} from '../../redux/email/action'


function* fetchEmailAsyn() {
    const emailData = yield call(fetchEmailApi);
    yield put(getAllEmails(emailData.data));
}

function* fetchgetAllTypesAsyn({result}) {
    yield put(getAllTypes(result)); 
}

function* getAllEmailsAsyn({usersList}) {
    yield put(getAllEmails(usersList));
}

function* getAllTypesAsyn({result}) {
    yield put(getAllTypes(result));
}


export function* WatcherEmailApp() {
    yield takeLatest(WATCH_EMAIL,fetchEmailAsyn)
    yield takeLatest(WATCH_ALL_TYPE_EMAIL,fetchgetAllTypesAsyn)
    yield takeLatest(GET_ALL_EMAIL_ASYN,getAllEmailsAsyn)
    yield takeLatest(GET_ALL_TYPE_ASYN,getAllTypesAsyn)
}

