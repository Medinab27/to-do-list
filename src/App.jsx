import { useState } from 'react';
import './App.css';
import TodoList from './features/TodoList';
import TodoForm from './features/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  function handleAddTodo(newTodo) {
    const newTodoID = {
      id: todoList.length,
      title: newTodo,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodoID]);
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodoList(updatedTodos);
  }
  return (
    <div>
      <h1>My To-dos</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}
export default App;
