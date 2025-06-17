import { useState, useEffect } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel.jsx';
import TodoListItemStyles from './TodoListItem.module.css';

function TodoListItem({ item, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(item.title);

  function handleCancel() {
    setWorkingTitle(item.title);
    setIsEditing(false);
  }

  function handleEdit(event) {
    setWorkingTitle(event.target.value);
  }

  function handleUpdate(event) {
    event.preventDefault();
    if (!isEditing) return;
    onUpdateTodo({ ...item, title: workingTitle });
    setIsEditing(false);
  }

  useEffect(() => {
    setWorkingTitle(item.title);
  }, [item]);

  return (
    <li>
      <div className={TodoListItemStyles.text}>
        <form onSubmit={handleUpdate}>
          {isEditing ? (
            <>
              <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
              <button
                className={TodoListItemStyles.button}
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="button" onClick={handleUpdate}>
                Update
              </button>
            </>
          ) : (
            <>
              <label className={TodoListItemStyles.label}>
                <input
                  type="checkbox"
                  id={`checkbox${item.id}`}
                  checked={item.isCompleted}
                  onChange={() => onCompleteTodo(item.id)}
                />
              </label>
              <span onClick={() => setIsEditing(true)}>{item.title}</span>
            </>
          )}
        </form>
      </div>
    </li>
  );
}

export default TodoListItem;
