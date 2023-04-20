import React from 'react';
import './App.css';
 import axios from 'axios';
// import Card from './card.jsx';
// import Pokeinfo from './pokeinfo';
  import { useState,useEffect } from 'react';
// import { useEffect } from 'react';
// import pokemon from './images/pokemon-logo.png'


function App() {
const [next_url,setnext_url]=useState();
const [prev_url,setprev_url]=useState();
const[curr_data,setcurr_data]=useState([]);
const [poke_info,setpoke_info]=useState([]);

const get_poke_data=async()=>{
  setpoke_info([]);
  const all_data=await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then(async(res)=>{

 setcurr_data(res.data.results);
   console.log(curr_data);
  setnext_url(res.next);
   
  });
  
  const all_poke_info=(data)=>{

    data.forEach(async(item)=>{
      await axios.get(item.url).then((res)=>{
        setpoke_info((old_data)=>[...old_data,res.data]);
      })
      
    })

    

  }
  
all_poke_info(curr_data);
 console.log(poke_info)

}

  // useEffect(()=>{
  //   get_poke_data();
  // },[])
  return(
    <>
    <button style={{color:"white",backgroundColor:"green",padding:"5px"}} onClick={get_poke_data}>fetch data</button>
    </>
  );
}

export default App;
