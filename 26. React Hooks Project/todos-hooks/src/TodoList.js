import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { Paper, List, ListItem, Divider, ListItemText } from '@material-ui/core';




function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <ListItem>
                            <ListItemText>{todo.task}</ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList;