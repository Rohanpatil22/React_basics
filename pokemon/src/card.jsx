
import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";


function Card({pokeData}){
  const [Eachpoke,setEachPoke]=useState([]);
  const[selpoke,setselpoke]=useState();
  const[flag,setflag]=useState(0);
  const all_poke_data=pokeData;
  function get_data(){
    all_poke_data.map((ele)=>{
    axios.get(ele.url).then(res=>{
       // console.log(res.data);
       setEachPoke(cuurentList=>[...cuurentList,res.data]);
       return Eachpoke;
   })
})
  }

  function clickedPokeData(info)
  {
      console.log(info);
      setflag(1);
      setselpoke(info);
  }

  useEffect(()=>{
    get_data();
    console.log(Eachpoke);
  },[all_poke_data])

   if(pokeData)
   {
    
    // const all_poke_data=pokeData;
    // console.log(all_poke_data);
   
   
}
// console.log(Eachpoke);
    return (
        <> {flag===0 && Eachpoke &&  <div className="grid grid-cols-4 w-4/5 m-auto gap-6">{Eachpoke.map((element,index)=> (
         
            // console.log(element)
             <div className="w-52 h-64 bg-stone-500 rounded" key={index} onClick={()=>clickedPokeData(element)}>  
              <div  className="text-purple-100 text-center text-lg mb-4 ">{element.name}</div>     
            <div className="flex justify-center mt-4 text-bold"><img className="w-1/2" src={element.sprites.other.dream_world.front_default} alt={element.name}/></div>
           
            </div>
         ))}</div>
         
         }


         {flag===1 && 
          <div className="h-full">
            <div className="w-full text-right">
              <buttton className="bg-red-600 p-2 w54 mr-10 text-center text-neutral-100 font-bold rounded text-lg" onClick={() => { setflag(0) }}>Close</buttton>
            </div>
            <div className=" mt-20 flex justify-center items-center h-full">
              <div className="w-1/3 rounded-3xl bg-stone-500" style={{height:"520px"}}>
                <div className="flex justify-center mt-3"><img className="w-40" src={selpoke.sprites.other.dream_world.front_default} alt={selpoke.name}></img></div>
                <div className="text-3xl mt-5 text-center">{(selpoke.name).toUpperCase()}</div>
                <div className="mt-8">
                  <table style={{border:"1px solid white",width:"90%",margin:"auto"}}>
                    <tr style={{border:"1px solid white"}}>
                      <td style={{border:"1px solid white"}}>Base Experience</td>
                      <td style={{border:"1px solid white",textAlign:"center"}}>{selpoke.base_experience}</td>
                    </tr>
                    <tr style={{border:"1px solid white"}}>
                      <td style={{border:"1px solid white"}}>Height</td>
                      <td style={{border:"1px solid white",textAlign:"center"}}>{selpoke.height}</td>
                    </tr>
                    <tr style={{border:"1px solid white"}}>
                      <td style={{border:"1px solid white"}}>Weight</td>
                      <td style={{border:"1px solid white",textAlign:"center"}}>{selpoke.weight}</td>
                    </tr>
                    <tr style={{border:"1px solid white"}}>
                      <td style={{border:"1px solid white"}}>Ability</td>
                      <td style={{border:"1px solid white",textAlign:"center"}}>{selpoke.abilities.map((val)=>(<label key={val.ability.name}>{val.ability.name}</label>))}</td>
                    </tr>
                    <tr style={{border:"1px solid white"}}>
                      <td style={{border:"1px solid white"}}>Species</td>
                      <td style={{border:"1px solid white",textAlign:"center"}}>{selpoke.species.name}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

          </div>
         
         
         }

        </>
    );
   

    
   
}

   
 

export default Card;