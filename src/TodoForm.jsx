function TodoForm (){
    return (
    <form>
        <label htmlFor="todoTitle">Todo</label>;
        <input type="text" id= "todoTitle"></input>
        <button type="submit">Add Todo</button>
    </form>
)
};

export default TodoForm;