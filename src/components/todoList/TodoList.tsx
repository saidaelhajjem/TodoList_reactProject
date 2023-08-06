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
        <div className='todos'>
            {todos.map(todo => (
                <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            ))}

        </div>
    )
}

export default TodoList;