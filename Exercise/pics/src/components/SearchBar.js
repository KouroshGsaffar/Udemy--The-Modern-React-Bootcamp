import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }
    onInputChange = (event) => {
        // event.preventDefault()
        this.setState({ term: event.target.value })
    }
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={this.state.term} onChange={this.onInputChange} />
                    </div>

                </form>
            </div>
        )
    }
}
