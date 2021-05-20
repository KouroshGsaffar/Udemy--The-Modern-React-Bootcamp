import React from 'react'

export default function Accordion({ items }) {
    const handleClick = (index) => {
        console.log('Title clicked', index)
    }
    const renderedItems = items.map((item, index) => {
        return <React.Fragment key={item.title}>
            <div className='title active' onClick={() => handleClick(index)}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className='content active'>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return (
        <div className='ui styled accordion'>
            {renderedItems}
        </div>
    )
}
