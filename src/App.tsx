import React, { useState } from 'react';
import './App.scss';
import { Todo } from "./models/TodoModel";
import InputFeild from './components/inputFeild/InputFeild';
import TodoList from './components/todoList/TodoList';
import { DragDropContext,  DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setcompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("");
    }
  };


const onDragEnd=(result:DropResult)=>{
  const {destination , source}=result;
  if(!destination) return;
  if(destination.droppableId=== source.droppableId && destination.index===source.index) return;
let add;
let active=todos;
let complete=completedTodos;
  // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

       // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setcompletedTodos(complete);
    setTodos(active);
  console.log(result);
  

}

  return (
<DragDropContext onDragEnd={onDragEnd}>
<div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setcompletedTodos={setcompletedTodos} />
    </div>

</DragDropContext>


  
  );
}

export default App;
