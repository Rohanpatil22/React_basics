import pic from "./images/PWSkills-main.png";
import pic_2 from "./images/search_icon.png";
import './App.css';

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
   
    </>
  );
}

export default App;
