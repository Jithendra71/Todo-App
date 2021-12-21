import './App.css';
import  React, { useState, useEffect } from 'react';
import {Button, FormControl, InputLabel,Input} from '@mui/material'
// import Todolist from './Todolist';
// import { doc, getDoc,  } from 'firebase/firestore/lite';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('')

  useEffect( ()=>{
    db.collection('Todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs[0].data().todo)
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[])

  const addTodo = (event)=>{
    event.preventDefault()
    // setTodos([...todos, input])
    db.collection('Todos').doc(input).set({
      todo: input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  const addInput = (event)=>{
    setInput(event.target.value)
  }

  const deleteTodo = (currTodo)=>{
    // console.log(db.collection('Todos').getDocs)
    db.collection('Todos').doc(currTodo).delete()
  }

  return (
    <div className="App">
      {/* <Todolist/> */}

      <h1>Todo List</h1>
      <form>
      <FormControl>
      <InputLabel>✍ Write a Todo to add</InputLabel>  
      <Input type="text" placeholder="Enter a todo" value={input}  onChange={addInput}/>
      <Button disabled={!input.trim()} onClick={addTodo} type='submit' variant="contained"  >Add todo</Button>
      </FormControl>
      
      </form>
      <ul>
        {todos.map(todo => {
          return <Todo deleteTodo={deleteTodo} todo={todo}/>
        })}
      </ul>

    </div>
  );
}

export default App;
