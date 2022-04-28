import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newtodos = [todo, ...todos]
    console.log(newtodos)
    // this syntax adds newly created todo to the BEGINNING 
    // of the todos state array
    setTodos([todo, ...todos])
  };
  return (
    <div className="to-do-app">
      <h1>To Do List</h1>
      <TodoForm addToDo={addToDo} />
    </div>
  );
}

export default App;
