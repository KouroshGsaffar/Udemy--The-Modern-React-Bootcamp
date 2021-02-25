import React, { Component } from 'react'
import uuid from 'react-uuid'


class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state={task: ''}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newTask={...this.state, id: uuid()}
        this.props.createTodo(newTask);
        this.setState({task: ''})
    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task' >New Todo</label>
                    <input 
                    name='task'
                    id='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                    />
                    <button>ADD TODO</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;