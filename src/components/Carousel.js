import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselComponent() {
  return (
    <Carousel className='mb-5' id='hero'>
      <Carousel.Item>
        <img className="d-block w-100" src={require('../images/Hero.jpg')} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={require('../images/Masjid.jpg')} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={require('../images/Kelas.jpg')} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
