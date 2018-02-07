
function filter(state, condition) {
    var newState = {}
    Object.keys(state).map((key) => {
        var event = state[key];
        if (condition(event))
            newState[key] = { ...event }
    })
    console.log(state)
    return newState;
}

function updateState(state) {
    window.localStorage.setItem('eventList', JSON.stringify(state))
}

function eventsReducer(state = JSON.parse(window.localStorage.getItem('eventList')) || {}, action) {
    switch (action.type) {
        case 'ADD':
            console.log(action.payload)
            state = { ...state, [parseInt(Object.keys(state).pop() || 0) + 1]: action.payload }
            updateState(state)
            break;
        case 'DELETE':
            state = { ...state }
            delete state[action.payload]
            updateState(state)
            break;
        case 'REMOVE_ALL':
            state = {}
            updateState(state)
            break;
        case 'FILTER':
            state = JSON.parse(window.localStorage.getItem('eventList'))
            switch (action.payload) {
                case 'free':
                    return filter(state, (event) => { return (event.price == 0) ? true : false })
                case 'discounted':
                    return filter(state, (event) => { return (event.discount == 0) ? false : true })
                case 'non-discounted':
                    return filter(state, (event) => { return (event.discount == 0) ? true : false })
            }
            break;
    }
    //window.localStorage.setItem('eventList', JSON.stringify({}))

    return state;
}



export { eventsReducer }