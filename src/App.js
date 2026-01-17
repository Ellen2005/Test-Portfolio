import React, { useEffect } from 'react';
import AOS from 'aos';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Shoutouts from './components/Shoutouts';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Projects />
      <Shoutouts />
      <Contact />
    </div>
  );
}

export default App;
