import { TextField } from '@material-ui/core'
import React, { useContext } from 'react'
import { DispatchContext } from './context/todos.context'
import useInputState from './hooks/useInputState'

export default function EditTodoForm({ task, id, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task)
    const dispatch = useContext(DispatchContext)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch({ type: 'EDIT', id: id, newTask: value })
            reset();
            toggleEditForm();
        }}
            style={{ marginLeft: "1rem", width: '50%' }}
        >
            <TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
        </form>
    )
}
