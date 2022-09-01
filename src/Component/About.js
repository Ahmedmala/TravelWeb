import React from "react";
import skr from '../Images/skr.jpg';
import '../CSS/HomeAbout.css';
import Same from './Same';
const About =()=>{

    return(
        <>
    <Same
        title="KNOW MORE ABOUT US"
        title1="Best Time to Visit Northern areas of Pakistan on Tour Packages"
        text="Pakistan is blessed with four seasons, it depends upon travelers’ 
        mood and nature what he/she wants to explore, in the Winters coastal line
        of Pakistan is the best time to explore natural beaches. On way to the 
        coastal highway, you will find the calm and beautiful beaches among all
        others in the world. You are a snow lover then the Northern areas of 
        Pakistan in winters from December to March are in a category where 
        heavy snowfalls each year. South and central Punjab had a unique 
        cultural ambiance for cultural and food lovers, it’s unique in the world."
        imgsrc = {skr}
        path="/Services"
        btn = "Know More"
      />
       </>
    )

}
export default About;