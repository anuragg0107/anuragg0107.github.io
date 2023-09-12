import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Project from './component/Project/Project';
import Skills from './component/Skills/Skills';
import Footer from './component/footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';
import BackToTop from './component/BackToTop/BackToTop';
import {Box,Center ,Flex,Heading, Text} from "@chakra-ui/react";
import Gitgraph from './component/Gitgraph';
import GitStats from './component/GitStatus';

function App() {
  const theme= useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode? 'black' : '',
      color:darkMode?'white':''
    }}
    >
     <Home />
     <About />
     <Project />
     <Skills />
     <Center>
     <Gitgraph/>
     </Center>
     <Center>
        <Flex direction={"column"} alignItems="center" gap={"10"}>
          <Heading size={"md"} >My Github Stats</Heading>
          <GitStats />
        </Flex>
      </Center>
     <Footer/>
     <BackToTop/>
     <Box>
        <Text style={{textAlign:"center",fontSize:"20px",fontWeight:"500"}}>Made by Anurag</Text>
       </Box>
    </div>
  );
}

export default App;
