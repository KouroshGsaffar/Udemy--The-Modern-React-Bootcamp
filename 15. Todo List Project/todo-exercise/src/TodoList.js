import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={todos:[]}
        this.create=this.create.bind(this);
        this.update=this.update.bind(this);
    }
    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id){
        this.setState({
            todos: this.state.todos.filter(task => (task.id !== id))
        })
    }
    update(id, updatedTask){
        const updatedTodos=this.state.todos.map(todo=>{
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
        })
        this.setState({todos: updatedTodos})
    }
    render() {
        const todoList = this.state.todos.map(todo=>(
            <Todo 
            task={todo.task}
            key={todo.id}
            removeTodo={()=>this.remove(todo.id)}
            updateTodo={this.update}
            id={todo.id}
            />
        ))
        return (
            <div>
                <h1>Todo List!</h1>
                <h4>A Simple React Todo List App</h4>
                {todoList}
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;