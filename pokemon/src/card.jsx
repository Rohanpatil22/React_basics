import React from "react";

function Card({poke_data}){
 console.log(poke_data);
    return(
        <>
        {
            poke_data.map((item)=>
            {
             return(
            <div className="flex border-2  items-center gap-10 pl-4 bo rounded-lg w-80 ml-22 bg-neutral-400">
            <div>{item.id}</div>
            <div><img  src={item.sprites.front_default} alt={item.name}/></div>
            <div>{(item.name).toUpperCase()}</div>
            </div>
             )

            
            }
        )
        }
        
        </>
    );
}

export default Card;