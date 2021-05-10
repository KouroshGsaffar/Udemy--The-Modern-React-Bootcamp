import React, { Component } from 'react'
import uuid from 'react-uuid';

export default class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = { width: '', height: '', color: '' }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newBox = { ...this.state, id: uuid() }
        this.props.addItem(newBox)
        this.setState({ width: '', height: '', color: '' })
    }
    render() {
        const { height, width, color } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input type='text' id='height' name='height' value={height} onChange={this.handleChange} />
                    <label htmlFor='width'>Width</label>
                    <input type='text' id='width' name='width' value={width} onChange={this.handleChange} />
                    <label htmlFor='color'>Background Color</label>
                    <input type='text' id='color' name='color' value={color} onChange={this.handleChange} />
                </div>
                <button>Add Box</button>
            </form>

        )
    }
}
