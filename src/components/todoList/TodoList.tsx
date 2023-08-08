import React from 'react';
import "./TodoList.scss";
import { Todo } from '../../models/TodoModel';
import SingleTodo from '../singleTodo/SingleTodo';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        /*      <div className='todos'>
                 {todos.map(todo => (
                     <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                 ))}
     
             </div> */
        <div className="container">
            <div className="todos">
                <span className="todos__heading">
                    Active tasks
                </span>
                {todos.map(todo => (
                    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ))}
            </div>
            <div className="todos remove">
            <span className="todos__heading">
                    Completed tasks
                </span>
                {todos.map(todo => (
                    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ))}

            </div>
        </div>
    )
}

export default TodoList;