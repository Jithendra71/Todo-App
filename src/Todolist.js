import React from 'react'

export default function Todolist() {
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Title " />
            <br/>
            <input type="text" placeholder="Description" />
            <button>Add todo  </button>
            <br/>
            <button>Clear todo</button>

        </div>
    )
}
