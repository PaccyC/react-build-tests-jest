import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './components/TodoList';

const mockTodos = [
    { id: 1, text: 'Test Todo 1', isCompleted: false },
    { id: 2, text: 'Test Todo 2', isCompleted: true },
  ];


test('renders a list of todos', () => {
  render(<TodoList todos={mockTodos} toggleTodo={() => {}} deleteTodo={() => {}}/>)
  expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Todo 2/i)).toBeInTheDocument();
})
