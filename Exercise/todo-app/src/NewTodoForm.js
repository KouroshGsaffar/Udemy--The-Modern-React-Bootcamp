import React, { Component } from 'react'
import uuid from 'react-uuid';

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { task: '' }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newTask = { ...this.state, id: uuid(), completed: false }
        this.props.add(newTask)
        this.setState({ task: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task' >New Task</label>
                    <input name='task' value={this.state.task} onChange={this.handleChange} />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}
