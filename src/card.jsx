import React from "react"


function card({names, var1, details}){
console.log(details)
    return(
        <>
        <h2>This is another component</h2>
        <ul>{
            names.map((h)=>
           <li key={h}>{h}</li> 
            )
            }</ul>
        <h1>{var1}</h1>
        <h1>{details.gender}</h1>
        <h1>{details.email}</h1>
        {/* <h1>{details?.name?.first}</h1> */}
        
      
        </>
         )
    }
    
    export default card
   
   