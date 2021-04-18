import React, { Component } from 'react'
import Die from './Die'

export default class RollDice extends Component {
    static defaultProps = {
        side: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = { die1: 'one', die2: 'two' }
        this.roll = this.roll.bind(this)
    }

    roll = () => {
        const newDie1 = this.props.side[Math.floor(Math.random() * this.props.numSide)]
        const newDie2 = this.props.side[Math.floor(Math.random() * this.props.numSide)]
        this.setState({ die1: newDie1, die2: newDie2 })

    }
    render() {
        return (
            <div>
                <Die num={this.state.die1} />
                <Die num={this.state.die2} />
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}
