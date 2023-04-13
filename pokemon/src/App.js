import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './card.jsx';
import Pokeinfo from './pokeinfo';
 import { useState } from 'react';
import { useEffect } from 'react';
import pokemon from './images/pokemon-logo.png'


function App() {
  // const [count, setcount] = useState(0);
  const[intial_url]=useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
 
  
  useEffect(() => {
    fetch_data();
  });

 let poke_arr=[];
  async function fetch_data (){
   await axios.get(intial_url).then((res) => {
     
       console.log(res.data);
      get_poke_data(res.data.results)
     
    });
  }

  const get_poke_data=async(res)=>{

  
    res.map(async(item)=>{
      const result= await axios.get(item.url);
       poke_arr.push(result.data);
  })
   console.log(poke_arr);

  }

 
return (
  <>
  <div className="flex justify-center "><img className="w-1/4 mt-4" src={pokemon} alt="pkemon"></img></div>
    <div className="flex align-center mt-10 ">
      <div className="grid grid-cols-2 gap-y-6 w-3/5">

     <Card poke_data={poke_arr}/>
      </div>

      <div>
        <Pokeinfo />
      </div>
    </div>
  </>
);
}

export default App;
