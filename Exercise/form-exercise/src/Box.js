import React, { Component } from 'react'

export default class Box extends Component {
    handleClick = () => {
        this.props.remove(this.props.id)
    }
    render() {
        const { color, height, width, remove, id } = this.props
        return (
            <div className='Box'>
                <div style={{ backgroundColor: color, height: `${height}em`, width: `${width}em` }}>
                </div>
                <button onClick={this.handleClick} >Remove box</button>
            </div>
        )
    }
}
