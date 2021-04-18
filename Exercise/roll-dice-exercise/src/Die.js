import React, { Component } from 'react'

export default class Die extends Component {
    render() {
        return (
            <div>
                <i className={`fas fa-dice-${this.props.num}`}></i>
            </div>
        )
    }
}
