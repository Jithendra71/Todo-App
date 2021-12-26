import './App.css';
import  React, { useState, useEffect } from 'react';
import {Button, FormControl, InputLabel,Input,Slider} from '@mui/material';
// import Box from '@mui/material/Box';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DesktopDatePicker from '@mui/lab/DatePicker';
// import Todolist from './Todolist';
// import { doc, getDoc,  } from 'firebase/firestore/lite';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('')
  const [deadline,setDeadline] = useState(7)

  useEffect( ()=>{
    db.collection('Todos').orderBy('deadline','asc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs[0].data().todo)
      setTodos(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  const addTodo = (event)=>{
    event.preventDefault()
    // setTodos([...todos, input])
    const date = new Date()
    date.setDate(date.getDate()+deadline)
    console.log(date)
    db.collection('Todos').doc(input).set({
      todo: input,
      deadline:date
    })
    setInput('')
  }

  const addInput = (event)=>{
    setInput(event.target.value)
  }
  const addDeadline = (event)=>{
    setDeadline(event.target.value)
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
      <br></br>
      <div>
        Set a Deadline(in days)
      </div>
      <Slider
        aria-label="Temperature"
        defaultValue={7}
        valueLabelDisplay="auto"
        onChange={addDeadline}
        step={1}
        marks
        min={1}
        max={15}
      />
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



// <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DesktopDatePicker
//           label="Custom input"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={({ inputRef, inputProps, InputProps }) => (
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <input ref={inputRef} {...inputProps} /> 
//               {InputProps?.endAdornment}
//             </Box>
//           )}
//         />
//       </LocalizationProvider>