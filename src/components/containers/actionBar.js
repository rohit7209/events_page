import React, { Component } from 'react'
import { addEvent, filterAction } from '../../actions/eventActions';

import { connect } from 'react-redux';


class ActionBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'all'
        }
    }

    _getBase64Image(e) {
        this.setState({ submitDisable: true });

        var url = URL.createObjectURL(e.target.files[0]);
        var img = new Image();

        var me = this;

        img.src = url;
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = 400
            canvas.height = 250
            var ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0, this.width, this.height, 0, 0, 400, 250);
            var dataImg = canvas.toDataURL();

            me.setState({ submitDisable: false });
            me.setState({ image: dataImg })
        };
    }

    _eventFormSubmit(e) {
        e.preventDefault();
        this.refs['newEventFormTriggerBtn'].click();
        this.refs['newEventForm'].reset();

        this.props.addEvent({
            ...this.state
        })
    }

    _filter(type) {
        this.setState({ filter: type });
        this.props.filterEvents(type)
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter Events
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" style={{zIndex:'1001'}}>
                            <h6 className={(this.state.filter === 'all') ? "dropdown-header" : "dropdown-item"} onClick={(e) => { this._filter('all') }}>Display All</h6>
                            <h6 className={(this.state.filter === 'free') ? "dropdown-header" : "dropdown-item"} onClick={(e) => { this._filter('free') }}>Free Events</h6>
                            <h6 className={(this.state.filter === 'discounted') ? "dropdown-header" : "dropdown-item"} onClick={(e) => { this._filter('discounted') }}>Discounted Events</h6>
                            <h6 className={(this.state.filter === 'non-discounted') ? "dropdown-header" : "dropdown-item"} onClick={(e) => { this._filter('non-discounted') }}>Events with no discount</h6>
                        </div>
                    </div>
                    <button
                        ref="newEventFormTriggerBtn"
                        className="btn btn-primary btn-sm"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        New Event
                    </button>
                </nav>
                <div className="collapse" id="collapseExample">
                    <div className="card-body">
                        <form ref="newEventForm" onSubmit={e => this._eventFormSubmit(e)}>
                            <div className="form-row align-items-center" style={{ padding: '15px' }}>
                                <div className="col-sm-3 my-1">
                                    <input
                                        required="required"
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Event title"
                                        value={this.state.title}
                                        onChange={(e) => { this.setState({ title: e.target.value }) }}
                                    />
                                </div>
                                <div className="col-sm-3 my-1">
                                    <input
                                        required="required"
                                        type="text" className="form-control form-control-sm"
                                        placeholder="Venue"
                                        value={this.state.venue}
                                        onChange={(e) => { this.setState({ venue: e.target.value }) }}
                                    />
                                </div>
                                <div className="col-sm-3 my-1">
                                    <input
                                        required="required"
                                        type="date" className="form-control form-control-sm"
                                        placeholder="Date"
                                        value={this.state.date}
                                        onChange={(e) => { this.setState({ date: e.target.value }) }}
                                    />
                                </div>
                                <div className="col-sm-3 my-1">
                                    <input
                                        required="required"
                                        type="number" min="0"
                                        className="form-control form-control-sm"
                                        placeholder="Price"
                                        value={this.state.price}
                                        onChange={(e) => { this.setState({ price: e.target.value }) }}
                                    />
                                </div>
                                <div className="col-sm-3 my-1">
                                    <input
                                        required="required"
                                        type="number" min="0"
                                        className="form-control form-control-sm"
                                        placeholder="Discount (%)"
                                        value={this.state.discount}
                                        onChange={(e) => { this.setState({ discount: e.target.value }) }}
                                    />
                                </div>
                                <div className="col-sm-3 my-1">
                                    <input
                                        required="required"
                                        ref="image"
                                        onChange={(e) => { this._getBase64Image(e) }} type="file" className="form-control form-control-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6 my-1">
                                <textarea
                                    required="required"
                                    type="text" className="form-control form-control-sm"
                                    placeholder="Description"
                                    onChange={(e) => { this.setState({ description: e.target.value }) }}
                                >{this.state.description}</textarea>
                            </div>
                            <hr />
                            <div className="col-sm-12 my-1">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                    disable={(this.state.submitDisable) ? "disabled" : ""}
                                >Create Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        events: state.eventsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: function (payload) {
            dispatch(addEvent(payload))
        },
        filterEvents: function (payload) {
            dispatch(filterAction(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar)