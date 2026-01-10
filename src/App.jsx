import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import PurposeValues from './components/PurposeValues';
import LeadershipAcademy from './components/LeadershipAcademy';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <PurposeValues />
        <LeadershipAcademy />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
