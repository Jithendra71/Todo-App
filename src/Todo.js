import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Todo(props) {
    const date1 = props.todo.deadline.toDate()
    const date2 = new Date()
    const deadline = Math.ceil((date1-date2)/(1000 * 60 * 60 * 24))
    if(deadline>=0)
    return (
        <>
        <List>
            <ListItem > 
            <ListItemText primary={props.todo.todo} secondary={`Deadline⏰: ${deadline}days`}></ListItemText>
            </ListItem>
            <Button onClick={()=>props.deleteTodo(props.todo)} >✅Done</Button>
        </List>
        </>
    )
    return(
        <>
        <List>
            <ListItem > 
            <ListItemText primary={props.todo.todo} secondary={`Past deadline`} style={{'color':'red'}}></ListItemText>
            </ListItem>
            <Button onClick={()=>props.deleteTodo(props.todo)} >✅Done</Button>
        </List>
        </>
    )
}

export default Todo
