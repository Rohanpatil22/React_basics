import React from "react";
import { useSelector} from "react-redux";
import {useDispatch } from "react-redux";
 import {addtodo,remove_todo,remove_all_list} from './features/todoSlice';
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
 
function remove_task(txt)
{
  dispatch(remove_todo(txt));
  toast.success('Task Removed successfully !', {
  position: toast.POSITION.TOP_RIGHT
});
}

function remove_all()
{

 dispatch(remove_all_list());
 toast.success('All task removed successfully !', {
  position: toast.POSITION.TOP_RIGHT
});
}




  return (
    <>
    <div>
      <div class="w-1/2 m-auto align-center">
      <input class="mt-5 bg-transparent border-2 border-zinc-500 text-slate-200 w-80 p-1 " placeholder="Enter your task" type="text" value={inp_val} onChange={(e)=>{setinp_val(e.target.value)}}/>
      <button disabled={!inp_val} class={inp_val ? "ml-10 text-slate-200 border-none p-1 rounded w-24 bg-cyan-800":"ml-10 text-slate-200 border-none p-1 rounded w-24 bg-gray-500" }  onClick={get_val} >Add Todo</button>
      <button onClick={(e)=>{remove_all()}} diabled={todos.length} class={todos.length!==0 ?"ml-10 bg-red-600 p-1 text-white rounded w-32":"ml-10 bg-gray-500 p-1 text-white rounded w-32"}>Delete all task</button>
      </div>

     
      <div class="w-1/2 m-auto mt-14">
       
      {todos.map((ele)=>(

      <div key={ele.id} class="border-2 border-zinc-500 p-2 mt-2 m-auto text-slate-200 bg-cyan-800 flex justify-between pr-10">
        <div ><input class="bg-transparent border-0" type="text" value={ele.text} disabled></input></div>
        <div><button ><i onClick={()=>remove_task(ele.id)} class="fa fa-trash"></i></button>
        <button  class="ml-4"><i class="fas fa-edit"></i></button></div>
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
