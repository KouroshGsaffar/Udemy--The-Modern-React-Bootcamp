import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react'


export default function Todo({ task, completed, id, removeTodo, toggleTodo }) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
            <ListItemText style={{ textDecoration: completed && 'line-through' }}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label='Edit'>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
