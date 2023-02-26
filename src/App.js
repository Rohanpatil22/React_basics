import React from "react";
import { useState,useEffect } from "react";
import Card from "./card"

function Counter(){

  const [count, setCount]= useState(100);

  function oneUp()
  {
    setCount(count+1);
  }
  return(
    <div>
      <button onClick={oneUp}>Count :{count}</button>
    </div>
  
  );
}

function NameList(){

  //const list_item=["Spiderman","Batman","Ironman"];
  let [listItem , setlistItem]= useState(["Spiderman","Batman","Ironman"]);
  let [name , setname]=useState("antman");
  // let list_item=list.map((x)=>
  // <li>{x}</li>
  // )
  function add_ele()
  {
    setlistItem([...listItem,name]);
    setname("");
  }

 


  return(
    <>
     <ul>{listItem.map((x)=>
    <li key={x}>{x}</li>
    )}</ul> 
    <input type="text" value={name} onChange={(e)=> setname(e.target.value)}></input>
    <button onClick={add_ele}>ADD</button>
    </>

  );
}


function App() {

  
  const demo=()=>{
    alert("Its working")
  }
  let names=["Apple","Mango","Banana"]
  let var1="Rohan";

  const[details, setDetails]= useState({})

  const fetchDetails=async()=>{
  
fetch('https://randomuser.me/api')
     .then((response) => response.json())
     .then((data) =>{setDetails(data.results[0])})
  
  }

  useEffect(()=> {
    fetchDetails();
}, [])

  return (
    <>
    <h1>Hello World</h1>
    <button onClick={demo} style={{color:"white",backgroundColor:"gray",padding:"5px",width:"100px",border:"none"}}>Click Me</button>
   <Counter />
   <NameList />
   <Card names={names} var1={var1} details={details}/>
   <button onClick={fetchDetails}>Click Here</button>
    </>
  );
}



export default App;
