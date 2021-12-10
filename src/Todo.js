import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Todo(props) {
    return (
        <List>
            <ListItem>
            <ListItemText>{props.todo}</ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo
