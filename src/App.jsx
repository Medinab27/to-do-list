import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  function handleAddTodo(newTodo) {
    const newTodoID = { id: todoList.length, title: newTodo };
    setTodoList([...todoList, newTodoID]);
  }
  return (
    <div>
      <h1>My To-dos</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
