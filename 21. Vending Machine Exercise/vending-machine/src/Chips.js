import React, { Component } from 'react'
import './Chips.css'
import {Link} from 'react-router-dom'
import Message from './Message'



export default class Chips extends Component {
    constructor(props){
        super(props);
        this.state={bags:0}
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({bags: this.state.bags+1})
    }
    render() {
        return (
            <div>
                <Message>
                <h1>Chips</h1>
                    <h3>Does not work with my diet!</h3>
                    <h3>Eaten Bags:{this.state.bags}</h3>
                    <button onClick={this.handleClick}>+</button>
                    <h1>
                        <Link exact to='/'>Go Back</Link>
                    </h1>
                </Message>
                <img src='https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg' />


            </div>
        )
    }
}
