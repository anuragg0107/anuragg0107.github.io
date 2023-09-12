import {Button, Box, Text} from '@chakra-ui/react'
import {UnorderedList,ListItem} from '@chakra-ui/react'
import React, {  useState } from 'react'
import "./Navbar.css";
import "../../App.css"
import {Link} from "react-scroll";
import {FaBars,FaTimes} from "react-icons/fa";
import Toggle from '../Toggle/Toggle';
const Navbar = () => {
    const [data,setData]=useState(false)
    const [color, setColor]=useState(false);
    const handleClick=()=>{
      setData(!data)
    }
    const changeColor=()=>{
     if(window.scrollY >= 100){
      setColor(true)
     }
     else{
      setColor(false)
     }
    }
    window.addEventListener("scroll",changeColor)
  return (
    <div>
    <Box className={ color ? "header header_bg" : "header"}>
        <Box className="navbar_left">
        <Link to="/"><Text 
         className="navbar_name"
          style={{fontFamily:"BestermindRegular",fontWeight:"bold"}}>

        Anurag Gupta
        
        </Text></Link>
          <Toggle />
        </Box>
    <Box className="navbar_right">
         <Box className="navbar_list">
         <UnorderedList style={{listStyle:"none"}}>
  <ListItem className='li'> <Link to='home' activeClass='active' smooth={true} spy={true} >HOME</Link> </ListItem>
  <ListItem className='li'><Link to="about" smooth={true} spy={true}>ABOUT</Link></ListItem>
  <ListItem className='li'> <Link to='project' smooth={true} spy={true}>PROJECT</Link></ListItem>
  <ListItem className='li'><Link to="skill" smooth={true} spy={true}>SKILL</Link></ListItem>
  {/* <ListItem className='li'> <Link to="contact" smooth={true} spy={true}>CONTACT</Link> </ListItem> */}
          </UnorderedList>
         </Box>
         <Button className='button navbar_button' borderRadius={"34px"} colorScheme={"orange.400"}>
         <Link to="contact" smooth={true} spy={true}>CONTACT</Link>
         </Button>
         {/* <button className='button navbar_button' colorScheme={"orange.400"}>add</button> */}
    </Box>
 
 {/* <Box  className='hamburger' onClick={handleClick}>
 {data ? (
  <FaTimes size={20} style={{color:"#fff"}}/>
 ) : (
   <FaBars size={20} style={{color:"#fff"}}/>
 ) }
 </Box> */}
   </Box>
    </div>
  )
}

export default Navbar