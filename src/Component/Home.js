import React from "react";
import hun from "../Images/hun.jpg";
import "../CSS/HomeAbout.css";
import Same from "./Same";
const Home = () => {
  return (
    <>
      <Same
        title="MALA TRAVEL AND TOURS"
        title1="The Right Destination For You & Your Family!"
        text="We are providing travel and tours packages at a very reasonable
            price along with proper guidance. Even if you want an adventurous
            tour or you are looking to sail on the sea or you want to spend that
            amazing night in a desert with your friends, family or loved ones.The 
            moments you have desired for all your life can be accomplished with so 
            easy that you won’t have to to worry about anything. Our travel experts
            can steer you for the trip so you will have the most fabulous and
            memorable experience. We are offering tour packages from Karachi to 
            Gilgit Hunza, Skardu, Chitral, Naran, Kaghan, Neelum Valley, 
            Azad Kashmir, Swat Kalam, and Murree Galayat."
        imgsrc = {hun}
        path="/About"
        btn = "Read More"
      />
    </>
  );
};
export default Home;
