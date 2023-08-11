import React from 'react';
import "./TodoList.scss";
import { Todo } from '../../models/TodoModel';
import SingleTodo from '../singleTodo/SingleTodo';
import { Droppable } from 'react-beautiful-dnd';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<Props> = ({ todos, setTodos,completedTodos,setcompletedTodos }) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {
                    (provided,snapshot) => (
                        <div className={`todos ${snapshot.isDraggingOver ?"dragactive":""}`}
                         ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos__heading">
                                Active tasks
                            </span>
                            {todos?.map((todo,index) => (
                                <SingleTodo index={index} todos={todos}  todo={todo} key={todo.id} setTodos={setTodos} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>

            <Droppable droppableId="TodosRemove">
                {
                    (provided,snapshot)=>(
                        <div className={`todos ${snapshot.isDraggingOver ?"dragcomplete":"remove"}`}
                         ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__heading">
                            Completed tasks
                        </span>
                        {completedTodos?.map((todo,index) => (
                            <SingleTodo index={index} todos={completedTodos} todo={todo} key={todo.id}  setTodos={setcompletedTodos} />
                        ))}
                        {provided.placeholder}
        
                    </div>
                    )
                }
           
</Droppable>

        </div>
    )
}

export default TodoList;