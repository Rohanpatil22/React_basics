import React from "react";

function Card({poke_info}){
    console.log(poke_info);
        if(poke_info)
        {
            return(
                <>
                <div className="border-2 w-1/5 m-auto mt-20 rounded-2xl bg-zinc-700 p-4">
                <div className="flex justify-center"><img className="text-center w-40" src={poke_info.sprites.front_default} alt={poke_info.name}/></div>
                <div className="text-white pl-8"><span className="font-bold text-black">Name :</span> {(poke_info.name).toUpperCase()}</div>
                <div className="text-white pl-8"><span className="font-bold text-black">Height :</span> {poke_info.height}</div>
                <div className="text-white pl-8"><span className="font-bold text-black">Weight :</span> {poke_info.weight}</div>
                {/* {
                    poke_info.abilities.map((item)=>{
    
                        <div>{item.ability.name}</div>
                    })
                } */}
               <div className="pl-8 text-white"><span className="font-bold text-black">Abilities :</span><ul> {poke_info.abilities.map((item, index) => (
                        <li  key={index}
                         className="pl-20 text-white">{item.ability.name} </li>
                    ))}</ul></div> 
               
                 </div>
                </>
               
            );
        }

        else{
            return(
                <>
                <div></div>
                </>
            )
        }
        
    

    
    }

    


export default Card;