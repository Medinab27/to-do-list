import TodoListItem from './TodoListItem';
import TodoListStyles from './TodoList.module.css';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  const filteredTodoList = todoList.filter((item) => !item.isCompleted);

  return (
    <>
      {isLoading ? (
        <p className={TodoListStyles.text}>Todo list loading...</p>
      ) : filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul className={TodoListStyles.ulTodoList}>
          {filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              item={todo}
              onCompleteTodo={onCompleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
