import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import pokemon from './img/pokemon-logo.png';
import Card from './Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const[poke_data,setpoke_data]=useState();
const[key_data,setkey_data]=useState();
  const fetch_data= async (event)=>
  {
    event.preventDefault();
    if(key_data)
    {
      const user_inp=key_data.trim();
      // await axios.get(`https://pokeapi.co/api/v2/pokemon/${user_inp}/`).then((res)=>{
       await axios.get(`${user_inp}`).then((res)=>{
      if(res.status=== 200)
      {
        setpoke_data(res.data);
        toast.success('Data fetched successfully', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
    }).catch((err)=>{

      setpoke_data('');
      setkey_data('');
      toast.error("Please enter valid id or name",{
        position: toast.POSITION.TOP_RIGHT});
    })

    }
    else{
      setpoke_data('');
      setkey_data('');
      toast.warn('Please enter Id or name', {
        position: toast.POSITION.TOP_RIGHT
    });
    
    }
    
  }
  function get_inp_data(val){

  setkey_data(val);

  }
  return (
   <>
      <div className='flex justify-center mt-6'><img className='w-1/4' src={pokemon} alt="pokemon_logo"></img></div>
      <div className='flex justify-center items-center mt-10'>
        <input className='w-1/4 bg-transparent border-2 border-zinc 500 p-1 text-slate-200' type='text' placeholder='Enter Id or Name' onChange={(e) => { get_inp_data(e.target.value) }} />
        <button className='text-slate-200 bg-teal-700 rounded p-1 w-20 ml-5 border-2' onClick={fetch_data}>Search</button>
      </div>
      {/* <div>{poke_data ? poke_data.name : "" }</div> */}
      <div>
        <Card poke_info={poke_data} />
      </div>
      <ToastContainer />
   </>
  );
}

export default App;
