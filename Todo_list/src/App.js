import React from "react";
import { useSelector} from "react-redux";
import {useDispatch } from "react-redux";
 import {addtodo} from './features/todoSlice';

function App() {
 const todos=useSelector((state)=>state.todos.todos);
 const dispatch = useDispatch();
  return (
    <>
    <input type="text"/>
    <button>Add Todo</button>
    <h1>{todos[0].text}</h1>
    </>
  );
}

export default App;
