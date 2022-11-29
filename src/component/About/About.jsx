import React from 'react'
import {Box,Text} from "@chakra-ui/react";
import "./About.css";
import SvgImg from './SvgImg';
const About = () => {
  return (
    <div id='about' className='about_head'>
   <Box className='all_about'>
    <Text >All
     <strong>About</strong>
     Me</Text>
   </Box>
   <Box className='about_container'>
    <Box className='image1_container'>
      <SvgImg />
    </Box>
    <Box className='about_me'>
      <Text marginBottom="10px">Hello! My name is Anurag Gupta & I enjoy <br/>
       creating things that live on the internet.<br />
        I'm a passionate Developer, with strong <br />
        administrative & communication skills, <br /> good 
      attention to detail & the ability to <br /> write
       efficient code.</Text>
       <hr />
       <Text marginTop={"10px"}>
       I'm open to Job opportunities. If you think <br /> my skills are 
       relevant to your job <br /> requirements then  do contact me.
       </Text>
    </Box>
   </Box>
    </div>
  )
}

export default About