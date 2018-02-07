import { createStore, combineReducers, applyMiddleware } from 'redux'
import { eventsReducer } from './reducers/eventReducer'

import {eventSaga} from './sagas/eventSaga'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const masterReducer = combineReducers({ eventsReducer })

const store = createStore(masterReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(eventSaga)

store.subscribe(() => {
    console.log(store.getState())
})


export { store }