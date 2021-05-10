import React, { Component } from 'react'
import uuid from 'react-uuid'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: uuid(), task: 'Brush your teeth', completed: false },
                { id: uuid(), task: 'Walk your Dog', completed: true }
            ]
        }
    }
    addTask = (newTask) => {
        this.setState(st => ({ todos: [...st.todos, newTask] }))
    }
    deleteTask = (id) => {
        const newTodos = this.state.todos.filter(todo => (todo.id !== id))
        this.setState({ todos: newTodos })
    }

    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo
        })
        this.setState({ todos: updatedTodos })
    }
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <NewTodoForm add={this.addTask} />
                {this.state.todos.map(todo =>
                    <ul>
                        <li>
                            <Todo key={todo.id} {...todo} delete={this.deleteTask} editTask={this.update} />
                        </li>
                    </ul>
                )}
            </div>
        )
    }
}
