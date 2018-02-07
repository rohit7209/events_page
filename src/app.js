import React, { Component } from 'react'

import EventContainer from './components/containers/eventContainer';
import ActionBar from './components/containers/actionBar';


export default class App extends Component {
    render() {
        return (
            <div>
                <ActionBar/>
                <EventContainer/>
            </div>
        )
    }
}
