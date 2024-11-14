import React from 'react'
import TodoItem from './TodoItem'
const TodoList = ({todos,toggleTodo,deleteTodo}) => {
  return (
    <ul>
      {todos.map((todo)=>(
        <TodoItem
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}

export default TodoList