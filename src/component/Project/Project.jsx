import { Box,Button,DarkMode,Image,Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import "./Project.css";
import "../../App.css";
import { themeContext } from "../../Context";

const Project = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;

  return (
    <div id="project" className='project_head' >
    <Box className='all_project'>
      <Text >Projects</Text>
    </Box>
    <Box className='data' >
        <Box className='data1' style={{background: darkMode? "white" :"", color: darkMode? "black":""}}  >
           <Box className='project_content'>
            <Text as='h2' style={{color:"orange", textAlign:"center", fontStyle:"normal",
            fontWeight:"600",fontSize:"1.525rem"}}>Dot & Key Clone</Text>
            <Image src="https://media.giphy.com/media/UbS22xMbXNhKvWVHol/giphy.gif"
            alt="dot&key" style={{width:"100%",borderRadius:"10px",position:"relative",transition:"opacity 0.7s 0.3s"}} />
           <Text  style={{background:"#fff",color:"#000",justifyContent:"center"}}>
        It's my major project Dot & Key first time I am doing alone to make a clone of this beauty product website
        which is fully responsive, smooth UI.
          </Text>
          <Box style={{display:"flex" ,justifyContent:"flex-start"}}>
            <Text style={{color:"orange",fontSize:"19px",fontWeight:"500",width:"140px"}}>Tech Stack </Text>
         <Text> - REACT,AXIOS,ChakraUI,CSS, JavaScript, SwiperJs.</Text>
          </Box>
            <Box className='show_btn'>
              <a target="_blank" className='jss16'
              href='https://drive.google.com/file/d/1N1OtOpx7T6t8HOb-A99rbcm2KzoPevDF/view' >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 448 512" className="jss17" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
              </a>
              <a target={"_blank"} className="jss16"
              href='https://dotandkey1.netlify.app/'>
              <svg viewBox="0 0 24 24" focusable="false" class="jss17" height={"1em"} width="1em">
              <g fill="currentColor">
              <path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path>
              <circle cx="12" cy="12" r="2"></circle></g></svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://github.com/anuragg0107/green-letter-404.git" >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 640 512" className="jss17" height="1em"  width="1em"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z">
               </path>
              </svg>
              </a>
            </Box>
           </Box>
        </Box>
{/* https://media.giphy.com/media/oGg1r3YPQ69hJMegy4/giphy.gif */}

<Box className='data1'  style={{background: darkMode? "white" :"", color: darkMode? "black":""}}  >
           <Box className='project_content'>
            <Text as='h2' style={{color:"orange", textAlign:"center", fontStyle:"normal",
            fontWeight:"600",fontSize:"1.525rem"}}>Trips Villas </Text>
            <Image src="https://media.giphy.com/media/oGg1r3YPQ69hJMegy4/giphy.gif"
            alt="tripsvillas" style={{width:"100%",borderRadius:"10px",position:"relative",transition:"opacity 0.7s 0.3s"}} />
           <Text  style={{background:"#fff",color:"#000",justifyContent:"center"}}>
      TripsVillas is a one-stop portal to book, Villas, Vacation Rental appartment, Holiday homes and Homestays.
      I am making by using React and ChakraUI.  
          </Text>
          <Box style={{display:"flex" ,justifyContent:"flex-start"}}>
            <Text style={{color:"orange",fontSize:"19px",fontWeight:"500",width:"140px"}}>Tech Stack </Text>
         <Text> - REACT,AXIOS,ChakraUI,CSS, JavaScript, SwiperJs, Slick.</Text>
          </Box>
            <Box className='show_btn'>
              <a target="_blank" className='jss16'
              href='https://drive.google.com/file/d/1Wbd7FhjpAkQF2BwpSeQNDkEVqtndBuAm/view' >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 448 512" className="jss17" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
              </a>
              <a target={"_blank"} className="jss16" 
              href='https://silent-toes-7433-anuraggupta199418-gmailcom.vercel.app/'>
              <svg viewBox="0 0 24 24" focusable="false" class="jss17" height={"1em"} width="1em">
              <g fill="currentColor">
              <path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path>
              <circle cx="12" cy="12" r="2"></circle></g></svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://github.com/anuragg0107/silent-toes-7433.git" >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 640 512" className="jss17" height="1em"  width="1em"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z">
               </path>
              </svg>
              </a>
            </Box>
           </Box>
        </Box>

        <Box className='data1'  style={{background: darkMode? "white" :"", color: darkMode? "black":""}} >
           <Box className='project_content'>
            <Text as='h2' style={{color:"orange", textAlign:"center", fontStyle:"normal",
            fontWeight:"600",fontSize:"1.525rem"}}>KFC</Text>
            <Image src="https://media.giphy.com/media/WZSWVr4EXFWEGnnCbv/giphy.gif"
            alt="kfc " style={{width:"100%",borderRadius:"10px",position:"relative",transition:"opacity 0.7s 0.3s"}} />
           <Text  style={{background:"#fff",color:"#000",justifyContent:"center"}}>
        It's group project - Kfc is a food website. try to implement all the feature. I am worked on home page. We are 
        finished project in 7 days and learned a lot of new things being  part of team as a leader.
          </Text>
          <Box style={{display:"flex" ,justifyContent:"flex-start"}}>
            <Text style={{color:"orange",fontSize:"19px",
            fontWeight:"500",width:"95px"}}>Tech Stack </Text>
         <Text> - HTML,CSS, JavaScript</Text>
          </Box>
            <Box className='show_btn'>
              <a target="_blank" className='jss16'
              href='https://drive.google.com/file/d/1G-6hsM9evsd3K56q7lJOgQIs5OEO0jFq/view?usp=sharing' >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 448 512" className="jss17" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
              </a>
              <a target={"_blank"} className="jss16"
              href='https://ganesh-onlinekfc.netlify.app/'>
              <svg viewBox="0 0 24 24" focusable="false" class="jss17" height={"1em"} width="1em">
              <g fill="currentColor">
              <path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path>
              <circle cx="12" cy="12" r="2"></circle></g></svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://github.com/anuragg0107/busy-channel-5933.git" >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 640 512" className="jss17" height="1em"  width="1em"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z">
               </path>
              </svg>
              </a>
            </Box>
           </Box>
        </Box>
        
        <Box className='data1'  style={{background: darkMode? "white" :"", color: darkMode? "black":""}}  >
           <Box className='project_content'>
            <Text as='h2' style={{color:"orange", textAlign:"center", fontStyle:"normal",
            fontWeight:"600",fontSize:"1.525rem"}}>Clockify Clone</Text>
            <Image src="https://media.giphy.com/media/C18YmkT5fXFUdzEswt/giphy.gif"
            alt="dot&key" style={{width:"100%",borderRadius:"10px",position:"relative",transition:"opacity 0.7s 0.3s"}} />
           <Text  style={{background:"#fff",color:"#000",justifyContent:"center"}}>
        It's group project - Clockify is an time tracker for team or individual. We are finished project in
        5-6 days and learned of new things being a part of team.
          </Text>
          <Box style={{display:"flex" ,justifyContent:"flex-start"}}>
            <Text style={{color:"orange",fontSize:"19px",fontWeight:"500",width:"92px"}}>Tech Stack </Text>
         <Text> -HTML,CSS,JavaScript</Text>
          </Box>
            <Box className='show_btn'>
              <a target="_blank" className='jss16'
              href='https://drive.google.com/file/d/11LEeuytmFhu8hPvgbB_Ju8GOlv9k2mpM/view' >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 448 512" className="jss17" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
              </a>
              <a target={"_blank"} className="jss16"
              href='https://clockify-me-clone.netlify.app/'>
              <svg viewBox="0 0 24 24" focusable="false" class="jss17" height={"1em"} width="1em">
              <g fill="currentColor">
              <path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path>
              <circle cx="12" cy="12" r="2"></circle></g></svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://github.com/lokeshahire/abrasive-trade-5771.git" >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 640 512" className="jss17" height="1em"  width="1em"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z">
               </path>
              </svg>
              </a>
            </Box>
           </Box>
        </Box>

    
        <Box className='data1'  style={{background: darkMode? "white" :"", color: darkMode? "black":""}}  >
           <Box className='project_content'>
            <Text as='h2' style={{color:"orange", textAlign:"center", fontStyle:"normal",
            fontWeight:"600",fontSize:"1.525rem"}}>Gearbest Clone</Text>
            <Image src="https://media.giphy.com/media/F06fAcDXGidMqjrGMW/giphy.gif"
            alt="dot&key" style={{width:"100%",borderRadius:"10px",position:"relative",transition:"opacity 0.7s 0.3s"}} />
           <Text  style={{background:"#fff",color:"#000",justifyContent:"center"}}>
     It is a group project -  Gearbest has got over 1 million SKUs online, more than 1,000 new arrivals per day,  providing plentiful
       shopping options for users. I am worked in sign-in and sign-up section.
          </Text>
          <Box style={{display:"flex" ,justifyContent:"flex-start"}}>
            <Text style={{color:"orange",fontSize:"19px",fontWeight:"500",width:"92px"}}>Tech Stack </Text>
         <Text> - HTML,CSS,JavaScript</Text>
          </Box>
            <Box className='show_btn'>
              <a target="_blank" className='jss16'
              href='https://drive.google.com/file/d/1PejjTShhEBkQExqLnr2FBfnSX-Joz2Bu/view' >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 448 512" className="jss17" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://subtle-bombolone-88767c.netlify.app//">
              <svg viewBox="0 0 24 24" focusable="false" class="jss17" height={"1em"} width="1em">
              <g fill="currentColor">
              <path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path>
              <circle cx="12" cy="12" r="2"></circle></g></svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://github.com/anuragg0107/gearbest-clone.git" >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 640 512" className="jss17" height="1em"  width="1em"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z">
               </path>
              </svg>
              </a>
            </Box>
           </Box>
        </Box>

      
        <Box className='data1'  style={{background: darkMode? "white" :"", color: darkMode? "black":""}}  >
           <Box className='project_content'>
            <Text as='h2' style={{color:"orange", textAlign:"center", fontStyle:"normal",
            fontWeight:"600",fontSize:"1.525rem"}}>Fabbag Clone</Text>
            <Image src="https://media.giphy.com/media/cMEejuWu8AE6An62Tg/giphy.gif"
            alt="dot&key" style={{width:"100%",borderRadius:"10px",position:"relative",transition:"opacity 0.7s 0.3s"}} />
           <Text  style={{background:"#fff",color:"#000",justifyContent:"center"}}>
       It is a group project - Fabbag is a beauty experts and addicts driven by our passion for high-quality beauty products and delightful service.
       I am making home page.
          </Text>
          <Box style={{display:"flex" ,justifyContent:"flex-start"}}>
            <Text style={{color:"orange",fontSize:"19px",fontWeight:"500",width:"140px"}}>Tech Stack </Text>
         <Text> - HTML,CSS,JavaScript</Text>
          </Box>
            <Box className='show_btn'>
              <a target="_blank" className='jss16'
              href='https://drive.google.com/file/d/19h1HCagGpUTpt8Vl0cSlzPDQi-e9Etvd/view?usp=sharing' >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 448 512" className="jss17" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://fabbag-clone-u2.netlify.app/">
              <svg viewBox="0 0 24 24" focusable="false" class="jss17" height={"1em"} width="1em">
              <g fill="currentColor">
              <path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path>
              <circle cx="12" cy="12" r="2"></circle></g></svg>
              </a>
              <a target={"_blank"} className="jss16"
              href="https://github.com/itsApurba/fabbag-clone.git" >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0"
               viewBox="0 0 640 512" className="jss17" height="1em"  width="1em"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z">
               </path>
              </svg>
              </a>
            </Box>
           </Box>
        </Box>


    </Box>
    </div>
  )
}

export default Project