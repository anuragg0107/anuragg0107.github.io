import React, { useContext } from 'react'
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { Box } from '@chakra-ui/react';
import { themeContext } from '../../Context';
const Toggle = () => {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode;
    const handleclick=()=>{
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className='toggle'>
    <Moon />
    <Sun />
    <Box className='toggle_button' onClick={handleclick}
    style={darkMode? {left : "2px"} : {right : "2px"}}
    ></Box>
    </div>
  )
}

export default Toggle