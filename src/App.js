import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel.js'
import HeroComponent from './components/Hero.js';
import CardComponent from './components/Card.js';
import ContactComponent from './components/Contact.js';
import FooterComponent from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CarouselComponent />
      <HeroComponent />
      <CardComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
