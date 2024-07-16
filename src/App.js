import logo from './logo.svg';
import './App.css';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Landingpage from './components/Landingpage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
