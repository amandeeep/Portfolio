

import { useState, useEffect } from 'react';
import './App.css';
import Landing from './components/Landing';
import Landing04 from './components/Landing04';
import Landing05 from './components/Landing05';
import Landing06 from './components/Landing06';
import Landing07 from './components/Landing07';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import { BrowserRouter } from "react-router-dom";
import Address from './components/Address';
import Final from './components/Final';
import Certificates from './components/Certificates';
import ParticlesBackground from './components/ParticlesBackground';
import Results from './components/Results';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppButton from './components/WhatsAppButton';
import { Element } from 'react-scroll';
import ChatBot from './components/ChatBot';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ background: toggle ? '#1f2323' : '', color: toggle ? 'white' : '' }}>
      <ParticlesBackground />
      <BrowserRouter>
        
        <Final />
        
        <Navbar toggle={toggle} setToggle={setToggle} />

        <Element name="home">
          <Landing />
        </Element>

        <Element name="projects">
          <Landing04 />
        </Element>

        <Element name="academics">
          <Certificates />
        </Element>

       

        <Element name="feedbacks">
          <Landing05 />
        </Element>

        <Results />

         <Element name="contacts">
          <Landing06 />
        </Element>

        <Address />
        <Landing07 />
        <WhatsAppButton />
        <ScrollToTopButton />
        <ChatBot/>
      </BrowserRouter>
    </div>
  );
}

export default App;

