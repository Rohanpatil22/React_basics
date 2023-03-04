import pic from "./images/PWSkills-main.png";
import pic_2 from "./images/search_icon.png";
import main_img from "./images/main_img.jpg";
import './App.css';
import Card from "./Card";
import card1 from "./images/card_1.jpg";
import card2 from "./images/card_2.jpg";
import card3 from "./images/card_3.jpg";

function App() {
  return (
    <>
    <div class="navbar">
      <div><img src={pic} alt="pw_img"></img></div>
      <div>
        <img id="search_icon" src={pic_2} alt="search"></img>
        <input id="inp_1" type="text" placeholder="What do you want to learn?"/>
      </div>
      <div><button id="login_btn">Login / Register</button></div>
    </div>
   <div>
      <ul class="flex justify-center gap-20 items-center mt-8 font-medium text-lg">
        <li>Cources</li>
        <li>PW Skills Lab</li>
        <li>Job Portal</li>
        <li>Experience Portal</li>
        <li>Become an affiliate</li>
        <li>Hall Of Fame</li>
        <li>More</li>
      </ul>
    </div>
   <div class="mt-8">
    <img class="w-full"  src={main_img} alt="main_img"/>
   </div>
   <div class="mt-10">
   <div  class="text-5xl font-semibold text-center text-blue-800	">Popular Programs</div>
   <div class="text-center text-xl text-gray-400 mt-4">Most in demand and watched by people.</div>
   <div class="flex justify-center gap-14">
      <Card card_1={card1} heading="Full Stack Web Development" teacher="Hitesh Choudhary" />
      <Card card_1={card2} heading="Java With DSA And System Design" teacher="Priya Bhatia"/>
      <Card card_1={card3} heading="Data Science Masters" teacher="Krish Naik"/>
   </div>
   </div>
   
    </>
  );
}

export default App;
