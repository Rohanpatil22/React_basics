import React from "react";
import rock from './images/rock.jpg';
import paper from './images/paper.jpg';
import scissor from './images/scissor.jpg';
import { useState } from "react";
function App()
{
  const [user_sel,setuser_sel]=useState("");
  const [computer_img_sel,setcomputer_img_sel]=useState("");
  const [msg,set_msg]=useState("");
  function check_sel(val)
  {
    const user_sel_id=parseInt(val);
    console.log(user_sel_id);
    if(user_sel_id===0)
    {
      setuser_sel(rock);
    }
    else if(user_sel_id===1)
    {
      setuser_sel(paper);
    }
    else if(user_sel_id===2)
    {
      setuser_sel(scissor);
    }
  
    const computer_sel=Math.floor(Math.random()*3);
    if(computer_sel===0)
    {
      setcomputer_img_sel(rock);
    }
    else if(computer_sel===1)
    {
      setcomputer_img_sel(paper);
    }
    else if(computer_sel===2)
    {
      setcomputer_img_sel(scissor);
    }

    if(user_sel_id===computer_sel)
    {
      set_msg("Tied");
    }
    if((user_sel_id===0 && computer_sel===1) || (user_sel_id===1 && computer_sel===2) || (user_sel_id===2 && computer_sel===0))
    {
      set_msg("You Lose");
    }
    if((user_sel_id===1 && computer_sel===0) || (user_sel_id===2 && computer_sel===1) || (user_sel_id===0 && computer_sel===2))
    {
      set_msg("You Won");
    }
  }
  return(
    <>
    <div class="flex items-center justify-center gap-20 mt-20 h-1/2">
      <img id="0" onClick={(e)=>check_sel(e.target.id)} src={rock} alt="rock" class="w-40 h-40 rounded-full hover:scale-125 "></img>
      <img id="1" onClick={(e)=>check_sel(e.target.id)}  src={paper} alt="rock" class="w-40 h-40 rounded-full hover:scale-125 "></img>
      <img id="2" onClick={(e)=>check_sel(e.target.id)} src={scissor} alt="rock" class="w-40 h-40 rounded-full hover:scale-125 "></img>
    </div>
    <div class="flex items-center justify-center mt-20 gap-20">
      <img src={user_sel}  alt="" class={{user_sel} ? "w-40 h-40 rounded-full":" hidden"}></img>
      <div class="text-slate-200"><div class="text-5xl">Result</div><div class="mt-3 text-3xl text-center">{msg}</div></div>
      <img src={computer_img_sel}  alt="" class={{computer_img_sel} ? "w-40 h-40 rounded-full":" hidden"}></img>
    </div>
    
    </>
  );
}

 export default App;



