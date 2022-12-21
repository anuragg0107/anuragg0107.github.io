import React, { useEffect } from 'react'
import {Box,Text} from "@chakra-ui/react";
import "./About.css";
import SvgImg from './SvgImg';
import Aos from 'aos';
import "aos/dist/aos.css"
const About = () => {
  useEffect(()=>{
    Aos.init({duration:600})
  },[])
  return (
    <div id='about' className='about_head' data-aos='zoom-in'>
   <Box className='all_about'>
    <Text >All
     <strong>About</strong>
     Me</Text>
   </Box>
   <Box className='about_container'>
    <Box className='image1_container'>
      <SvgImg className="svg_img" />
    </Box>
    <Box className='about_me'>
      <Text marginBottom="10px">Hello! My name is Anurag Gupta & I enjoy 
       creating things that live on the internet.
        I'm a passionate Developer, with strong 
        administrative & communication skills,  good 
      attention to detail & the ability to  write
       efficient code.</Text>
       <hr />
       <Text marginTop={"10px"}>
       I'm open to Job opportunities. If you think  my skills are 
       relevant to your job  requirements then  do contact me.
       </Text>
    </Box>
   </Box>
    </div>
  )
}

export default About