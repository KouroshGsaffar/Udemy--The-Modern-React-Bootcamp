import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Message from './Message'



export default class Soda extends Component {
    render() {
        return (
            <div>
                <Message>
                <h1>Soda!</h1>
                <h3>Oh Suger Again!</h3>
                </Message>
                <img src='https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg' />
                <Link exact to='/'>Go Back</Link>
            </div>
        )
    }
}
