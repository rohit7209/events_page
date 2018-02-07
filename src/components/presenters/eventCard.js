import React, { Component } from 'react'

const style = {
    date: {
        position: 'absolute',
        top: '10px',
        fontWeight: 'bold',
        fontSize: '12px',
    },
    price: {
        position: 'absolute',
        bottom: '5px',
        fontWeight: 'bold',
    },
    discountOuter: {
        overflow: 'visible',
        position: 'absolute',
        color: 'black',
        top: '-45px',
        transform: 'rotate(-45deg)',
        right: '-45px',
        width: '10px',
        height: '10px',
        border: '50px solid transparent',
        borderLeft: '50px solid rgba(139,0,0,0.7)',
        background: 'transparent',
    },
    discountInner: {
        width: '30px',
        height: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '-6px',
        marginLeft: '-55px',
        transform: 'rotate(45deg)',
    }
}

function discountRibbon(discount) {
    return <div style={{ ...style.discountOuter }}>
        <div style={{ ...style.discountInner }}>{discount}</div>
    </div>
}

class EventCard extends Component {
    render() {
        return (
            <div className="card text-white col-sm-6 col-md-4 col-lg-3" style={{ padding: "5px", border: "0px" }}>
                <img className="card-img" style={{ width: '100%', height: '100%' }} src={this.props.image} alt="Card image" />
                <div className="card-img-overlay">

                    <div style={{ ...style.date }}>{this.props.date}</div>

                    <h4 className="card-title" style={{ marginTop: '15px' }}>{this.props.title}</h4>
                    <h6 className="card-text">{this.props.venue}</h6>
                    <div className="card-text" style={{ fontSize: '14px' }}>{this.props.description}</div>

                    <h5 style={{ ...style.price }}>$ {this.props.price || 0}</h5>

                    {(this.props.price != 0) ? (this.props.discount != 0) ? discountRibbon(`${this.props.discount}%`) : null : discountRibbon('Free')}
                </div>
            </div>
        )
    }
}

export { EventCard }