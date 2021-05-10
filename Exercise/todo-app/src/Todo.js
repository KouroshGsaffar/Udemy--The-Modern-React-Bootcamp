import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { task: this.props.task, isEditing: false }
    }
    handleClick = () => {
        this.props.delete(this.props.id)
    }
    handleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editTask(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }
    render() {
        const { task, completed } = this.props
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.task} name='task' onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className='Todo'>
                    <h3>{task}</h3>
                    <button onClick={this.handleClick}>X</button>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            )
        }
        return result
    }
}
