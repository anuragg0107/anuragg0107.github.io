import React from 'react'
import Typewriter from "typewriter-effect"
import "./Intro.css";
const Type = () => {
  return (
    <div className='type '>
       <Typewriter 
        options={{
          strings:[
            "Developer",
            "MERN Stack Developer"
          ],
          autoStart:true,
          loop:true,
          deleteSpeed:50,
          className:"Typewriter"            
        }}
     
    />
    </div>
   
  )
}

export default Type