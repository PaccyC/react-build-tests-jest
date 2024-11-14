const TodoItem = ({todo,toggleTodo,deleteTodo}) => {
  return (
    <li 
    style={{textDecoration:todo.isCompleted ? 'line-through' : 'none'}}
    className="">
      {todo.text}
      <button onClick={()=>toggleTodo(todo.id)}>Toggle complete</button>
      <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem