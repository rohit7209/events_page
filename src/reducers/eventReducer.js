
function filter(state, condition) {
    var newState = {}
    Object.keys(state).map((key) => {
        var event = state[key];
        if (condition(event))
            newState[key] = { ...event }
    })
    return newState;
}

function updateState(state) {
    window.localStorage.setItem('eventList', JSON.stringify(state))
}

function addEventToLocal(event, id) {
    let json = JSON.parse(window.localStorage.getItem('eventList'))
    json[id] = event
    window.localStorage.setItem('eventList', JSON.stringify(json))
}

function updateEvents(data) {
    let newState = JSON.parse(window.localStorage.getItem('eventList'))
    data.map((event) => {
        newState[parseInt(Object.keys(newState).pop() || 0) + 1] = event
    })
    return newState;
}

function eventsReducer(state = JSON.parse(window.localStorage.getItem('eventList')) || {}, action) {
    switch (action.type) {
        case 'ADD':
            let id = parseInt(Object.keys(state).pop() || 0) + 1
            state = { ...state, [id]: action.payload }
            addEventToLocal(action.payload, id)
            break;
        case 'REMOVE_ALL':
            state = {}
            updateState(state)
            break;
        case 'FILTER_EVENTS':
            state = updateEvents(action.payload.data)
            switch (action.payload.filter) {
                case 'free':
                    return filter(state, (event) => { return (event.price == 0) ? true : false })
                case 'discounted':
                    return filter(state, (event) => { return (event.discount == 0) ? false : true })
                case 'non-discounted':
                    return filter(state, (event) => { return (event.discount == 0) ? true : false })
            }
            break;
        case 'EVENTS_FETCH_SUCCEEDED':
            state = updateEvents(action.payload)
            break;
    }
    //window.localStorage.setItem('eventList', JSON.stringify({}))

    return state;
}



export { eventsReducer }