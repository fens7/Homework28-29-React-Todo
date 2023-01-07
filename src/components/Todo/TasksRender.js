import './TodoList.css';

function TodoList({ todos, updateTodo, deleteTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <label key={todo.id} className='todo-item'>
                    <input
                        type={'checkbox'}
                        checked={todo.isChecked} 
                        onClick={() => updateTodo(todo.id)}
                    />
                    <div style={todo.isChecked ? {textDecoration:"line-through"} : null}>{todo.desc}</div>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </label>
            ))}
        </div>
    );
}

export default TodoList;