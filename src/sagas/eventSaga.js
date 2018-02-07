import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from './api'

function* fetchEvents(action) {
    try {
        const promise = yield call(Api.fetchEvents, action.payload);
        yield put({ type: "EVENTS_FETCH_SUCCEEDED", payload: promise.data});
    } catch (e) {
        yield put({ type: "EVENTS_FAILED", message: "Not able to fetch events" });
    }
}


function* filterEvents(action) {
    try {
        const promise = yield call(Api.fetchEvents, action.payload);
        yield put({ type: "FILTER_EVENTS",   payload: { data: promise.data, filter: action.payload } });
    } catch (e) {
        yield put({ type: "EVENTS_FAILED", message: "Not able to fetch events" });
    }
}

function* eventSaga() {
    yield takeLatest("EVENTS_FETCH_REQUESTED", fetchEvents);
    yield takeLatest("FILTER", filterEvents);
}

export { eventSaga };
