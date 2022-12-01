import Resume from "./resume.pdf"
import React, { useContext } from 'react'
import "./Intro.css";
import {Box,Image,Text,Button } from "@chakra-ui/react";
import Type from "./Type";
import "../../App.css";
import {motion} from "framer-motion";
 import myimg from "../../Assets/myImage.jpg";
 import Github from "../../Assets/github.png";
 import Linkedin from "../../Assets/linkedin.png";
import { themeContext } from "../../Context";

const Intro = () => {
  const transition= {duration:2, type:'spring'}
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div>
        <Box className='intro'>
           <Box className='intro_left'>
               <Box className='intro_name'>
                 <span className="flex" style={{color: darkMode ? 'white' : " "}}>Hello
                 <span className='wave' role={"img"}>👋🏻</span>
                 </span>
                 <span className="name" style={{color: darkMode ? 'white' : " "}}>I'M
                     <strong style={{color: darkMode ? 'white' : " "}} style={{color:"rgb(227,64,95)",paddingLeft:"10px"}}>Anurag Gupta</strong>
                     </span>
                     <span className='last_child' style={{color: darkMode ? 'white' : " "}}>Frontend Developer who learn enjoy to creating things that live on the internet. I'm a passionate Developer, with
                     strong administrative & communication skills, good attention to detail & the ability to write efficient code</span>
               </Box>
               {/* <Box className='intro_desc'> */}
                   
               {/* </Box> */}
               <Box className='intro_type' style={{paddingTop:10, textAlign:"left"}}>
            <Type />
           </Box>
          <a href={Resume} download style={{textDecoration:"none"}}>
          <Button className='button intro_button' borderRadius={"34px"} colorScheme={"orange.400"}>Hire me</Button>
          </a>
           <Box className='intro_icon'>
           <a href="https://github.com/anuragg0107" target={"_blank"}>
           <Image src={Github} alt="github" />
           </a>
           <a href='https://www.linkedin.com/in/anurag-gupta-215877111' target={"_blank"}>
           <Image src={Linkedin} alt="linkedin" />
           </a>
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