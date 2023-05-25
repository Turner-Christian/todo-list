const Todo = (props) => {
    const todoClasses = [];
    if (props.todo.complete) {
        todoClasses.push('strike-through')
    }
    return(
    <div>
        <input onChange={(e) => { props.handleToggleComplete(props.index) }} checked={props.complete} type="checkbox" />
        <span className={todoClasses}>{props.todo.text}</span>
        <button style={{ marginLeft: '1rem' }} onClick={(e) => { props.handleTodoDelete(props.index) }}>Delete</button>
    </div>
    );
};

export default Todo