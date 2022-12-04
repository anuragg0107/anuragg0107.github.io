import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Project from './component/Project/Project';
import Skills from './component/Skills/Skills';
import Footer from './component/footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';
import BackToTop from './component/BackToTop/BackToTop';

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
     <Footer/>
     <BackToTop/>
    </div>
  );
}

export default App;
