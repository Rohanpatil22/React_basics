import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './card.jsx';
import Pokeinfo from './pokeinfo';
 import { useState } from 'react';
import { useEffect } from 'react';



function App() {
  // const [count, setcount] = useState(0);
  const[intial_url]=useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
  const [pokedataurl, setpokedataurl] = useState([]);

 let poke_arr=[];
  async function fetch_data (){
   await axios.get(intial_url).then((res) => {
     
       console.log(res.data);
       //setpokedataurl(res.data);
      // console.log(pokedataurl);
      get_poke_data(res.data.results)
     
    });
  }

  const get_poke_data=async(res)=>{

   // console.log(res)
    res.map(async(item)=>{
      const result= await axios.get(item.url);
      //console.log(result.data);
       poke_arr.push(result.data);
     // setpokedataurl([result.data]);
  })
   console.log(poke_arr);
  }

  useEffect(() => {
    fetch_data();
  },[intial_url]);


return (
  <>
    <div class="flex align-center ">
      <div class="grid grid-cols-2 gap-y-6 w-3/5">

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
