import React, { Component } from 'react'
import './Coin.css'

export default class Coin extends Component {
    render() {
        return (
            <div className='Coin'>
                <img src={this.props.isHead ? 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg' : 'https://images.unsplash.com/photo-1569917376060-ba7fb08e0d3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'} />
            </div>
        )
    }
}
