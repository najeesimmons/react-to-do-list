import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newtodos = [todo, ...todos];
    console.log(newtodos);
    // this syntax adds newly created todo to the BEGINNING
    // of the todos state array
    setTodos([todo, ...todos]);
  };

  const removeToDo = (id) => {
    let updatedToDos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedToDos);
  };

  const completeToDo = (id) => {
    let updatedToDos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedToDos)
  }

  return (
    <div className="to-do-app">
      <h1>To Do List</h1>
      <TodoForm addToDo={addToDo} />
      <hr className="seperator"></hr>
      {todos.map((todo) => {
        return ( 
        <ToDoItem completeToDo={completeToDo} removeToDo={removeToDo} todo={todo} key={todo.id} />
        )
      })}
    </div>
  );
}

export default App;
