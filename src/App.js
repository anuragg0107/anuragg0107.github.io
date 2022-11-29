import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Project from './component/Project/Project';
import Skills from './component/Skills/Skills';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Project />
     <Skills />
     <Footer/>
    </div>
  );
}

export default App;
