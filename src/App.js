import React from 'react'
import Main from './pages/Main';
import Contacts from './pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <>

        <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/contacts' element={<Contacts/>} />
            </Routes>
    </>
  )
}

export default App;


// import './App.css';
// import React, { useState } from 'react';
// import TodoList from './components/TodoList';


// function App() {
//     const [todos, setTodos] = useState([]);
//     const [value, setValue] = useState('');

//     function deleteTodo(id) {
//         const copy = [...todos].filter((todo) => todo.id !== id);
//         setTodos(copy);
//     }

//     function updateTodo(id) {
//         const copy = [...todos];
//         const current = copy.find((todo) => todo.id === id);
//         current.isChecked = !current.isChecked;
//         setTodos(copy);
//     }

//     function addTodo(e) {
//         e.preventDefault();
//         if (value) {
//             setTodos([
//                 ...todos,
//                 {
//                     id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
//                     desc: value,
//                     isChecked: false,
//                 },
//             ]);
//             setValue('');
//         }
//     }

//     return (
//         <>        
//         <div className='App'>
//         <div className='todo-container'>
//             <form action='#' onSubmit={addTodo}>
//                 <h1>Todo List</h1>
//                 <input
//                     value={value}
//                     onChange={(e) => setValue(e.target.value)}
//                     type={'text'}
//                     placeholder={'Type new task...'}
//                 />
//                 <button>Add Task</button>
//                 <br></br>
//                 <br></br>
//                 <TodoList
//                     deleteTodo={deleteTodo}
//                     updateTodo={updateTodo}
//                     todos={todos}
//                 />
//             </form>
//         </div>
//     </div>

//        </>
//     );
// }

// export default App;