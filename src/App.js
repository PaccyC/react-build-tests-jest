
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos]= useState([])
  const addTodo = (text)=>{
   setTodos( [...todos, {id: Date.now, text: text , isCompleted: false }])
  }

  const toggleTodo =(id)=>{
   setTodos(
    todos.map((todo)=> todo.id === id ? {...todo, isCompleted: true}: todo)
   )
  } 

  const deleteTodo =(id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

 return (
    <div className="App">
      <h1>Todo List</h1>
      <button onClick={()=> addTodo("New Task")}>Add Todo</button>
      <TodoList
      todos={todos}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
