import Resume from "./resume.pdf"
import React from 'react'
import "./Intro.css";
import {Box,Image,Text,Button } from "@chakra-ui/react";
import Type from "./Type";
import "../../App.css";
// import Image1 from './Image1';
 import myimg from "../../Assets/myImage.jpg";
 import Github from "../../Assets/github.png";
 import Linkedin from "../../Assets/linkedin.png";

const Intro = () => {
  return (
    <div>
        <Box className='intro'>
           <Box className='intro_left'>
               <Box className='intro_name'>
                 <span>Hello
                 <span className='wave' role={"img"}>👋🏻</span>
                 </span>
                 <span>I'M
                     <strong style={{color:"rgb(227,64,95)",paddingLeft:"10px"}}>Anurag Gupta</strong>
                     </span>
                     <span className='last_child'>Frontend Developer who learn enjoy to creating things that live on the internet. I'm a passionate Developer, with
                     strong administrative & communication skills, good attention to detail & the ability to write efficient code</span>
               </Box>
               {/* <Box className='intro_desc'> */}
                   
               {/* </Box> */}
               <Box className='intro_type' style={{paddingTop:10, textAlign:"left"}}>
            <Type />
           </Box>
          <a href={Resume} download style={{textDecoration:"none"}}>
          <Button className='button intro_button'>Hire me</Button>
          </a>
           <Box className='intro_icon'>
            <Image src={Github} alt="github" />
            <Image src={Linkedin} alt="linkedin" />
           </Box>
           </Box>
           <Box className='intro_img'>
    {/* <Image1/> */}
    <Image src={myimg} alt="myimg" className='myimage' />
    </Box>
        </Box>
    </div>
  )
}

export default Intro