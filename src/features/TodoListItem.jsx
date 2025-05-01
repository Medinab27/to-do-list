import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel.jsx';

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
  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <>
            <label>
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
    </li>
  );
}

export default TodoListItem;
