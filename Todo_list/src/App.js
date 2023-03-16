import React from "react";
import { useSelector} from "react-redux";
import {useDispatch } from "react-redux";
 import {addtodo,remove_todo} from './features/todoSlice';
 import { useState } from "react";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';




function App() {
  const[inp_val,setinp_val]=useState('');
 const todos=useSelector((state)=>state.todos.todos);
 const dispatch = useDispatch();
 const get_val=()=>{
  dispatch(addtodo(inp_val));
  setinp_val('');
  toast.success('Task added successfully !', {
    position: toast.POSITION.TOP_RIGHT
});
 }
 

  return (
    <>
    <div>
      <div class="w-1/2 m-auto align-center">
      <input class="mt-5 bg-transparent border-2 border-zinc-500 text-slate-200 w-80 p-1 " placeholder="Enter your task" type="text" value={inp_val} onChange={(e)=>{setinp_val(e.target.value)}}/>
      <button disabled={!inp_val} class={inp_val ? "ml-10 text-slate-200 border-none p-1 rounded w-24 bg-cyan-800":"ml-10 text-slate-200 border-none p-1 rounded w-24 bg-gray-500" }  onClick={get_val} >Add Todo</button>
      </div>
     
      <div class="w-1/2 m-auto mt-14">
       
      {todos.map((ele)=>(

      <div class="border-2 border-zinc-500 p-2 mt-2 m-auto text-slate-200 bg-cyan-800 flex justify-between pr-10">
        <div id={ele.id}>{ele.text}</div>
        <button><i onClick={()=>(dispatch(remove_todo(ele.id)))} class="fa fa-trash"></i></button>
      </div>
      ))  
      }
       
      </div>
      <ToastContainer />

    </div>
    </>
  );
}

export default App;
