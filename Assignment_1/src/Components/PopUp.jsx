import React from 'react'
import "./popUp.css"
import Frame_16 from "../assets/Frame_16.png"
import Frame_6 from "../assets/Frame_6.png"
import Frame_69 from "../assets/Frame_69.png"
import { RxCross1 } from "react-icons/rx";
const PopUp = () => {
  return (
    
       <div className="container"> 
      
     
      <div className="left-box">
        <img src={Frame_16} alt="Display" className="image" />
                
                <div className='flex mt-2 '>
                    <div className="small-box ">
                        <img src={Frame_6} alt="Small 1" className="small-image" />
                    </div>
                    <div className="small-box ml-8">
                        <img src={Frame_69} alt="Small 2" className="small-image" />
                    </div>
                    <div className="small-box ml-8">
                        <img src={Frame_69} alt="Small 3" className="small-image" />
                    </div>
                    <div className="small-box ml-8">
                        <img src={Frame_69} alt="Small 4" className="small-image" />
                    </div>
                </div>

      </div>

      
      <div className="right-box">
        <div className="text-content">
         <div className='flex'>
                <h2 className=" font-bold">Raju Rassibomb</h2>
                <RxCross1 className='ml-48'/>
         </div>
          <h1 className='pt-4'>MRP</h1>
          <h2 className=" font-bold text-xl">Raju's Dreams/-</h2>

          <div className='mt-8' style={{width:"359px",border:"1px dotted rgba(242, 113, 33, 1)"}}></div>
          <p className='font-bold pt-4'>Product Description:</p>
          <div className='pt-4' style={{width:"355px",height:"64px",fontSize:"12px"}}>
            <p className="">This product packs an extra punch, thanks to the literal blood,</p>
            <p>sweat and tears of a young boy.</p>
          </div>
          <div style={{width:"359px",border:"1px dotted rgba(242, 113, 33, 1)"}}></div>

          <div>
            <p className='font-bold pt-2'> Product Contents:</p>
            <div className='pt-2'>
                <p className='pt2'>10 hand-hurting pieces of rassi bombs</p>
                <p>Jilled with great pain</p>
                <p>Raju’s hopes</p>
            </div>
          </div>
          <div style={{width:"359px",border:"1px dotted rgba(242, 113, 33, 1)"}}></div>
          <div>
            <p className='font-bold pt-6'> Shiping Time:</p>
            <div className='pt-2'>
               
                <p>Before Raju understands that his dreams do not matter. </p>
                
            </div>
          </div>
        </div>
        <button className="button font-bold text-2xl">Choose Now</button>
      </div>
    </div>
  
  )
}

export default PopUp

