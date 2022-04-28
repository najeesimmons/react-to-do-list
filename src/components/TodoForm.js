import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addToDo(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="to-do-form">
      <input
        onChange={(e) => setInput(e.target.value)}
        className="to-do-input"
        placeholder="Add a To-Do"
      />
      <button type="submit" className="to-do-button">Add To Do</button>
    </form>
  );
}
