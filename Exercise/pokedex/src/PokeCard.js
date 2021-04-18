import React, { Component } from 'react'
import './PokeCard.css'

export default class PokeCard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props;
        const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
        return (
            <div className='PokeCard'>
                <h3>{name}</h3>
                <img src={`${url}${id}.png`} alt={name} />
                <h5>Type: {type}</h5>
                <h5>EXP: {base_experience}</h5>

            </div>
        )
    }
}
