import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Message from './Message'


export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Message>
                    <h3>Hello! I am a vending machine. What would you like to eat?</h3>
                </Message>
                <img className='vending' src='https://images.squarespace-cdn.com/content/v1/5a5510b49f07f5b634055938/1517603780406-Z9IUHZ91UP2C3XQM2IAA/ke17ZwdGBToddI8pDm48kKVczs87GVG3XDfixsZW1-JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIEJ7DZpNNTu3MXdTm5VQBYDQUowT_hf-p0862u3T0D_Y/vending-service-snacks-freshfood-beverages.png' />
                <Message>
                    <Link exact to='/soda'>Soda</Link>
                    <Link exact to='/chips'>Chips</Link>
                    <Link exact to='/candy'>Candy</Link>
                </Message>
            </div>
        )
    }
}
