import React, { useContext, memo } from 'react'
import useToggleState from './hooks/useToggleState'
import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import EditTodoForm from './EditTodoForm'
import { DispatchContext } from './context/todos.context'

function Todo({ task, completed, id }) {
    const [isEditing, toggleIsEditing] = useToggleState(false);
    const dispatch = useContext(DispatchContext)
    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? (
                <EditTodoForm task={task} id={id} toggleEditForm={toggleIsEditing} />
            ) : (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', id: id })} />
                    <ListItemText style={{ textDecoration: completed && 'line-through' }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => dispatch({ type: 'REMOVE', id: id })}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    )
}
export default memo(Todo);
