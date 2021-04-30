import React, { Component } from 'react'
import Coin from './Coin'

export default class CoinFlip extends Component {
    constructor(props) {
        super(props)
        this.state = { nhead: 0, ntail: 0, count: 0, isHead: false }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        const randNum = Math.random()
        console.log(randNum)
        if (randNum > 0.5) {
            this.setState({ nhead: this.state.nhead + 1, count: this.state.count + 1, isHead: true })
        } else {
            this.setState({ ntail: this.state.ntail + 1, count: this.state.count + 1, isHead: false })
        }
    }

    render() {
        return (
            <div>
                <h1>Lets flip a Coin!</h1>
                {this.state.count && <Coin isHead={this.state.isHead} />}
                <button onClick={this.handleClick}>Flip Me!</button>
                <h4>{`Out of ${this.state.count} flips, there have been ${this.state.nhead} heads and ${this.state.ntail} tails`}</h4>
            </div>
        )
    }
}
