import React  from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';


test('renders the Todo List Title', () => {
    render (<App />)
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();

  
});

test('add a new todo item', () => {
  render(<App />)
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

