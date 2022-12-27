import './TodoList.css';

export function TodoList(props) {
    return (
        <div>
            {props.values.map((task) => {
                return (
                    <label className='todo-item'>
                        <input type={'checkbox'} checked={task.checked} />
                        <div>{task.desc}</div>
                        <button>Delete</button>
                    </label>
                );
            })}
        </div>
    );
}
