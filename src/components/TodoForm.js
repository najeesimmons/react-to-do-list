import React, { useState } from 'react'

export default function TodoForm() {
  const [input, setInput] = useState("")
  return (
    <form className='to-do-form'>
        <input onChange={(e) => setInput(e.target.value)} className='to-do-input' placeholder='Add a To-Do'/>
        <button className='to-do-button'>Add To Do</button>
    </form>
  )
}
