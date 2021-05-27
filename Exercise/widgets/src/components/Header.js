import React from 'react'

export default function Header() {
    return (
        <div className='ui secondary pointing menu'>
            <a className='item' href='/'>Accordion</a>
            <a className='item' href='/list'>Search</a>
            <a className='item' href='/dropdown'>Dropdown</a>
            <a className='item' href='/translate'>Translate</a>
        </div>
    )
}
