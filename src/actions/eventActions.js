function addEvent(payload) {
    return {
        type: 'ADD',
        payload
    }
}

function filterAction(payload) {
    return {
        type: 'FILTER',
        payload
    }
}

export { addEvent, filterAction }