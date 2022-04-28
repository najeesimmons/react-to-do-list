import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi"

export default function ToDoItem({ todo, removeToDo, completeToDo }) {
  // the below is an alternative manner of object (prop) deconsturction 
  //   const { todo, removeToDo } = props
  return (
    <div className={todo.completed ? "to-do-row complete" : "to-do-row" }>
      {todo.text}
      <div className="icon">
        <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeToDo(todo.id)} />
        <BiCheckCircle onClick={() => completeToDo(todo.id)} />
      </div>
    </div>
  );
}
