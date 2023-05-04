import React, { useEffect } from 'react';
import './App.css';
 import axios from 'axios';
import Card from './card.jsx';
// import Pokeinfo from './pokeinfo';
  import { useState } from 'react';
// import { useEffect } from 'react';
 import pokemon from './images/pokemon-logo.png'


function App() {


  const [pokemonList, setPokemonList] = useState({next:'https://pokeapi.co/api/v2/pokemon?limit=20'});
  const [pokemonResults, setPokemonResults] = useState();
  const[check,setcheck]=useState(0);

  const getPokeListData = () => {
    setPokemonResults();
   axios .get(pokemonList.next).then(response => {
        console.log(response);

        const allPokemonResults = response.data.results;
        setPokemonList({
          next: response.data.next,
          prev:response.data.previous,
          results: allPokemonResults
        });

        return allPokemonResults;
      })
      .then(response => {
        console.log(response);
        if (response.length > 0) {
          setPokemonResults( response);
        }
      });
  };

  const getPrevPokeListData = () => {
    if(pokemonList.prev!==null)
    {
      setPokemonResults();
    }
    
    axios .get(pokemonList.prev).then(response => {
         console.log(response);
 
         const allPokemonResults = response.data.results;
         setPokemonList({
           next: response.data.next,
           prev:response.data.previous,
           results: allPokemonResults
         });
 
         return allPokemonResults;
       })
       .then(response => {
         console.log(response);
         if (response.length > 0) {
           setPokemonResults( response);
         }
       });
   };

   useEffect(()=>{
    getPokeListData()
   },[])

   function flag_check(val)
   {
      setcheck(val);
   }
  return(
   
    <>
      {/* { <button
        style={{ color: 'white', backgroundColor: 'green', padding: '5px' }}
        onClick={getPokeListData}
      >
        fetch data
      </button>
      } */}
      {
        pokemonResults && (
          <>
          {check===0 && <div style={{width:"95%",margin:"auto",textAlign:"center",marginLeft:"35%"}}><img className="w-1/4" src={pokemon} alt="poke_banner"></img></div>}
           <Card flag_check={flag_check} pokeData={pokemonResults}/>
           {check===0 && <div className='text-center m-5'> 
           <button className="bg-blue-500 p-2 rounded text-white font-bold w-28" onClick={getPrevPokeListData}>Previous</button>
            <button className="bg-blue-500 p-2 rounded text-white font-bold w-28 ml-2" onClick={getPokeListData}>Next</button>
           </div>}
            
          </>
       
        )
      }
      
    </>

  );
}

export default App;
