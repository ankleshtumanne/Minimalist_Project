

import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import frame from "../assets/Frame.png"
import instagramIcon from "../assets/instagramIcon.png"
import facebookIcon from "../assets/facebookIcon.png"
import youtubeIcon from "../assets/youtubeIcon.png"
import twitterIcon from "../assets/twitterIcon.png"

import linkedInIcon from "../assets/linkedinIcon.png"


import frame_7 from  "../assets/Frame_7.png"
import frame2 from  "../assets/Frame2.png"
import cornerImage from "../assets/cornerImage.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import PopUp from './PopUp';
const HomePage = () => {
  return (
    <div className="homepage-container">
      
      <div className="background-image">
       
        <div className="navbar flex">
           <div className='frameImage'> <img  src={frame} alt="" /></div>
         
        </div>
       
      </div>
      <div className='flex secondDiv mt-20'>
        <div className='firstLine mt-2'  style={{background:" #F27121"}}></div>
        <div className='AboutDiv ml-6 text-center  text-2xl font-bold about' style={{color:"#F27121"}}>About</div>
        <div  className='mt-2 firstLine ml-16'  style={{background:" #F27121"}}></div>
      </div>

      <div className=' textDiv flex justify-center mt-10 md:px-10'>
        <img className='frame2' src={frame2} alt="" />
        <div className=' text-center md:text-center'>
                <h1 className='text-base md:text-lg lg:text-xl'>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their </h1>
                <h1 className='text-base md:text-lg lg:text-xl'>chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can</h1>
                <p className='ml-36 text-sm md:text-base lg:text-lg  md:ml-36'>be heard louder than their cries for miles. Buy them, burst them, brag about them.</p>
                <p className='font-bold   md:text-base  text-center  mt-2 ' style={{marginLeft:"46px"}}>The choice is yours. Because they don’t have one.</p>
        </div>
        <img className='fram3' src={frame2} alt="" />
      </div>

      <div className='flex  mt-20'>
        <div className='mt-2'  style={{width:"30rem",height:"1rem",background:" #F27121",marginLeft:"120px"}}></div>
        <div className='ml-2 text-center  text-2xl font-bold' style={{width:"187px",color:"#F27121",height:"44px"}}>Our Products</div>
        <div  className='mt-2 ml-2'  style={{width:"30rem",height:"1rem",background:" #F27121"}}></div>
      </div>

      <div className="container">
      
      <div className="box1 ml-8" >
        <img src={frame_7} alt="Frame" className="image" />
        <div className="text-container flex">
          <div  className= 'rajuDiv mt-8' ><h2 className=''>Raju Rassibomb</h2></div>
         
          <div className='ml-8 mt-4'><button className="btn " >Quick New</button></div>
        </div>
      </div>

      
      <div className="box2 ">
        <img src={frame_7} alt="Frame" className="image" />
        <div className="text-container flex">
         <div className='rajuDiv mt-8'> <h2>Ladkiyo Ki Rani Chani</h2></div>
          
         <div className='mt-4'><button className="btn">Button 2</button></div>
        </div>
      </div>

    </div>
    
        <div className='OnlyLine mt-6'></div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="icons-container">
            <img src={cornerImage} alt="Corner 1" className="corner-image corner-image-left" />
            <h1 className='follow-text mt-2'>Follow Us On</h1>
            <div className="icons">
                <img src={instagramIcon} alt="Instagram" className="icon" />
                <img src={linkedInIcon} alt="LinkedIn" className="icon" />
                <img src={facebookIcon} alt="Facebook" className="icon" />
                <img src={twitterIcon} alt="Twitter" className="icon" />
                <img src={youtubeIcon} alt="YouTube" className="icon" />
            </div>

            <img src={cornerImage} alt="Corner 2" className="corner-image corner-image-right" />
        </div>
        <PopUp/>
    </div>
    
  );
};

export default HomePage;
