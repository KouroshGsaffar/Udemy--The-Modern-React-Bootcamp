import React, { useState } from 'react'



export default function Accordion({ items }) {

    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(index)
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
            <h1>{activeIndex}</h1>
        </div>
    )
}
