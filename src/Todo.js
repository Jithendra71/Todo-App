import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Todo(props) {
    return (
        <>
        <List>
            <ListItem > 
            <ListItemText primary={props.todo} secondary={'Deadline 🕗'}></ListItemText>
            </ListItem>
            <Button onClick={()=>props.deleteTodo(props.todo)} variant='contained'>Done</Button>
        </List>
        </>
    )
}

export default Todo
