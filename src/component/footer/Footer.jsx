import React,{useContext, useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./Footer.css";
import {BsTelephoneForward} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import "../../App.css";
import wave from "../../Assets/wave.png";
import {Image,Box,Text,Input,FormControl,useToast, Button, UnorderedList, ListItem} from "@chakra-ui/react";
import { themeContext } from "../../Context";

const Footer = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  const toast=useToast();
   const toastIdRef=useRef()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gnvyyz7', 'template_n9spzxd', form.current, 'zrU-YusKLL4-k4suC')
      .then((result) => {
          console.log(result.text);
          if(toastIdRef.current){
            toast.update(toastIdRef.current,{description:"Thankyou to connecting me"})
            console.log("message sent")
          }
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="contact">
       <Box className='contact_form'>
           <Box className='contact_left'>
            {/* <Box className='awesome'> */}
           <Image src={wave} alt="wave" style={{width:"90%",height:"500px"}} />
            {/* </Box> */}<Box className='f_content'>
            <Text fontSize={"40px"} className='touch' >Get in touch</Text>
              <Text fontSize={"40px"} fontWeight="500" className='contact'>Contact me</Text>
              <Box className='blur s_blurl' style={{background:"#abf1ff94"}}></Box>
              <Box>
                <Box className='contact_call'>
                    <Text  className='contact_button'   type="button">
                    <span className='contact_icon'><BsTelephoneForward/></span> +91-9754388825
                    </Text>
                    <Text   className='contact_button' type="button">
                    <span className='contact_icon'> <AiOutlineMail/></span> anurag.gupta199418@gmail.com
                    </Text>
                    <Text  className='contact_button' type="button" >
                    <span className='contact_icon' ><CiLocationOn/></span> MadhyaPradesh, India
                    </Text>
                </Box>
                <Box className='social_links'>
                  <UnorderedList className='about_social_links'>
                    <ListItem className='social_icons'>
                      <a href="https://github.com/anuragg0107"
                      target={"_blank"} rel="noreferrer" class="icon_colour">
                       <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                       <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                       </svg>
                      </a>
                    </ListItem>
                    <ListItem className='social_icons'>
                      <a href="https://www.linkedin.com/in/anurag-gupta-215877111"
                      target={"_blank"} rel="noreferrer" class="icon_colour">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                      </a>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>
           </Box>

           <Box className='contact_right'>
               <form ref={form} onSubmit={sendEmail} className='contacts_form'>
                    <div className='inputBox'>
                    <input type="text" name="user_name"  className='user'  required='required' />
                    <span style={{color: darkMode?'black':""}}>Name</span>
                    </div>
                   <div className='inputBox'>
                   <input type="email" name="user_email" className='user'  required='required'/>
                   <span style={{color: darkMode?'black':""}}>Email</span>
                   </div>
                   <div className='inputBox'>
                   <textarea name="message" className='user' placeholder='Message'    />
                   {/* <span style={{color: darkMode?'black':""}}>Message</span> */}
                   </div>
                     <input type="submit" value="Send" borderRadius={"34px"}  colorScheme={"orange.400"} className='button send_btn'
                     onClick={()=>
                     toast({
                      title:"Thankyou to connecting with me",
                      position:"top",
                      isClosable:true,
                      duration:3000,
                      status:"success",
                     })
                     }
                      /> 
                     <Box className="blur c_blurl" style={{background:"var(--purple)"}}></Box>
               </form>
           </Box>
           
       </Box>
      
    </div>
  )
}

export default Footer

