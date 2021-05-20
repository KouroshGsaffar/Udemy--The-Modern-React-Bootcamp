import React, { useState } from 'react'

export default function Search() {
    const [term, setTerm] = useState('')
    const handleChnage = (e) => {
        setTerm(e.target.value)
    }
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input' type='text' value={term} onChange={handleChnage} />
                </div>
            </div>
        </div>
    )
}
