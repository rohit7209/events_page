import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './store'

//store.dispatch({ type: 'REMOVE_ALL', payload: '' })

//store.dispatch({ type: 'FILTER', payload: 'free' })

/**store.dispatch({
    type: 'ADD',
    payload: {
        id: '1',
        name: 'Event Name',
        img: 'http://via.placeholder.com/500x200',
        title: 'Card title',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        time: 'Last updated 3 mins ago',
        price: '$240',
        discount: '20%',
        venue: 'Kolkata'
    }
})
store.dispatch({
    type: 'ADD',
    payload: {
        id: '2',
        name: 'Event Name',
        date: '22/21/2565'
    }
})
store.dispatch({
    type: 'ADD',
    payload: {
        id: '3',
        name: 'Event Name',
        date: '22/21/2565'
    }
})
store.dispatch({
    type: 'DELETE',
    payload: 2
})
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
