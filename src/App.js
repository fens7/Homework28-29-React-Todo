import './App.css';
import React, { useState } from 'react';
import { TodoList } from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    function addTodo(e) {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                desc: value,
                checked: false,
            },
        ]);
        setValue('');
    }

    function getValue(e) {
        setValue(e.target.value);
    }

    return (
        <div className='App'>
            <div className='todo-container'>
                <form action='#' onSubmit={addTodo}>
                    <h1>Todo List</h1>
                    <input
                        value={value}
                        onChange={getValue}
                        type={'text'}
                        placeholder={'Type new task...'}
                    />
                    <button>Add Task</button>
                    <br></br>
                    <br></br>
                    <TodoList values={todos} />
                </form>
            </div>
        </div>
    );
}

export default App;
