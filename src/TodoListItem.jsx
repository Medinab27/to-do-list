function TodoListItem({ item }) {
  return (
    <li> {item.title}</li>
    //{todo.map((todos) => {
    // return <li key={todos.id}>{todos.title}</li>;
    //})}
  );
}

export default TodoListItem;
