import React, { Component } from 'react'

export class ErrorMsg extends Component {
    render() {
        return (
            <div style={{paddingTop:'100px', textAlign:'center', width:'100%', color:'grey', fontFamily:"Roboto, 'sans-serif'", fontSize:'25px'}}>
                <div>{this.props.msg}</div>
            </div>
        )
    }
}
