import { IoIosArrowDropupCircle } from 'react-icons/io';
import React, { useContext, useState } from 'react'
import "./BackToTop";
import { themeContext } from "../../Context";
// import { makeStyles } from '@material-ui/core/styles';
const BackToTop = () => {
const [visible,setVisible]=useState(false);
const {theme}=useContext(themeContext);

const toggleVisible=()=>{
  const scrolled=document.documentElement.scrollTop;
  if(scrolled>300){
    setVisible(true)
  }
  else if(scrolled<=300){
    setVisible(false)
  }
}
const scrollToTop=()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  })
};
window.addEventListener('scroll',toggleVisible)
// const useStyles=makeStyles(()=>({
//   icon:{
//     fontSize:'3rem',
//     color:theme.tertiary,
//   }
// }))
// const classes=useStyles()
  return (
    <div style={{display:visible? 'inline' :'none'}} className='backToTop'>
      <button onClick={scrollToTop} aria-label='Back to top'>
          <IoIosArrowDropupCircle className='icon' style={{height:"50px",width:"50px"}} />
      </button>
    </div>
  )
}

export default BackToTop