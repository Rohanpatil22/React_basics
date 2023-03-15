// import card_1 from "./images/card_1.jpg"
import React from 'react';

function Card ({card_1, heading, teacher}) {
return(

    <>
    <div class="w-1/4 border rounded-xl bg-slate-200 p-1 mb-10 mt-10">
        <img class="w-full" src={card_1} alt="card_img_1"/>
        <div class="mt-4 text-blue-800 text-xl font-bold">{heading}</div>
        <div class="mt-10 font-normal text-lg">{teacher}</div>
        <div class="mt-1 font-bold text-xl mb-8">₹2975.00</div>
    </div>
    </>
);
}

export default Card;