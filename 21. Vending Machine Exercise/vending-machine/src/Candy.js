import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Message from './Message'



export default class Candy extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Candy!</h1>
                    <h3>I Love Skittles!</h3>
                </Message>
                <img src='https://images-na.ssl-images-amazon.com/images/I/81kMadembUL._SX425_.jpg'/>
                <Message>
                    <Link exact to='/'>Go Back</Link>
                </Message>
            </div>
        )
    }
}
