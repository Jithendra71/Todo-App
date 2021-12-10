import './App.css';
import  React, {useState } from 'react';
import {Button, FormControl, InputLabel,Input} from '@mui/material'
import Todolist from './Todolist';
import Todo from './Todo';

function App() {

  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('')

  const addTodo = (event)=>{
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  const addInput = (event)=>{
    setInput(event.target.value)
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
          return <Todo todo={todo}/>
        })}
      </ul>

    </div>
  );
}

export default App;
