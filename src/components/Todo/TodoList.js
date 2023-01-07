import './TodoList.css';
import React, { useState } from 'react';
import TodoListTasksRender from './TodoListTasksRender';

function TodoLogic() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    function deleteTodo(id) {
        const copy = [...todos].filter((todo) => todo.id !== id);
        setTodos(copy);
    }

    function updateTodo(id) {
        const copy = [...todos];
        const current = copy.find((todo) => todo.id === id);
        current.isChecked = !current.isChecked;
        setTodos(copy);
    }

    function addTodo(e) {
        e.preventDefault();
        if (value) {
            setTodos([
                ...todos,
                {
                    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                    desc: value,
                    isChecked: false,
                },
            ]);
            setValue('');
        }
    }

    return (
        <>
            <div className='App'>
                <div className='todo-logic'>
                    <form action='#' onSubmit={addTodo}>
                        <h1>Todo List</h1>
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type={'text'}
                            placeholder={'Type new task...'}
                        />
                        <button disabled={value.length < 4}>Add Task</button>
                        <br></br>
                        <br></br>
                        <TodoListTasksRender
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                            todos={todos}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default TodoLogic;
