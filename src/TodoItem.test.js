import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from './components/TodoItem';


const mockTodo = { id: 1, text: 'Test Todo 1', isCompleted: false };

test('renders a todo item', () => {
  render(<TodoItem todo={mockTodo} toggleTodo={()=>{} } deleteTodo={()=>{}}/>)
  expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
})

test('calls toggleTodo on button click', () => {
    const toggleTodo = jest.fn();
    render(<TodoItem todo={mockTodo} toggleTodo={toggleTodo} deleteTodo={() => {}} />);
    fireEvent.click(screen.getByText(/Toggle Complete/i));
    expect(toggleTodo).toHaveBeenCalledWith(mockTodo.id);
  });
  
  test('calls deleteTodo on button click', () => {
    const deleteTodo = jest.fn();
    render(<TodoItem todo={mockTodo} toggleTodo={() => {}} deleteTodo={deleteTodo} />);
    fireEvent.click(screen.getByText(/Delete/i));
    expect(deleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });