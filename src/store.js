import { createStore, combineReducers } from 'redux'
import { eventsReducer } from './reducers/eventReducer'

const masterReducer = combineReducers({ eventsReducer })

const store = createStore(masterReducer)

store.subscribe(() => {
    console.log(store.getState())
})


export { store }