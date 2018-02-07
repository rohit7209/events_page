import React, { Component } from 'react'
import { addEvent } from '../../actions/eventActions';

import { connect } from 'react-redux';

import { EventCard } from './../presenters/eventCard'
import { ErrorMsg } from './../presenters/errorMsg'

class EventContainer extends Component {
    render() {
        console.log(this.props.events)
        return (
            <div className="row" style={{ width: '100%', margin: '0px' }}>
                {(Object.keys(this.props.events).length) ?
                    Object.keys(this.props.events).map((key) => {
                        return <EventCard key={key} {...this.props.events[key]} />
                    })
                    :
                    <ErrorMsg msg="Oops! No event found :(" />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.eventsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: function (payload) {
            dispatch(addEvent(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)