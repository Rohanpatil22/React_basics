import React from 'react';
import './App.css';
 import axios from 'axios';
import Card from './card.jsx';
// import Pokeinfo from './pokeinfo';
  import { useState } from 'react';
// import { useEffect } from 'react';
// import pokemon from './images/pokemon-logo.png'


function App() {


  const [pokemonList, setPokemonList] = useState({});
  const [pokemonResults, setPokemonResults] = useState();

  const getPokeListData = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => {
        console.log(response);

        const allPokemonResults = response.data.results;
        setPokemonList({
          next: response.data.next,
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


  return(
    <>
    {/* <button style={{color:"white",backgroundColor:"green",padding:"5px"}} onClick={get_poke_data}>fetch data</button> */}
    <>
      { <button
        style={{ color: 'white', backgroundColor: 'green', padding: '5px' }}
        onClick={getPokeListData}
      >
        fetch data
      </button>
/*
      {pokemonList && (
        <pre className="text-white">{JSON.stringify(pokemonList)}</pre>
      )}

      {pokemonResults && (
        <pre className="text-white">{JSON.stringify(pokemonResults)}</pre>
      )} */}
      {
        pokemonResults && (
        <Card pokeData={pokemonResults}/>
        )
      }
      
    </>
    </>
  );
}

export default App;
