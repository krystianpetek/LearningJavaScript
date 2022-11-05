import React, { useState } from 'react';
import { TodoModel } from './TodoModel';
import { NewTodo } from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) =>
      [
        ...prevTodos,
        { id: Math.random().toString(), text: text }
      ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
