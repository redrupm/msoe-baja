import React, { useState, useEffect } from 'react';
import './../../scss/Slideshow.scss';

import slide1 from '../../images/slide1.jpeg';
import slide2 from '../../images/slide2.jpeg';
import logo from '../../images/BajaLogo.jpg';

const images = [slide1, slide2, logo];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <section className="slideshow">
      <div className="slides">
        {images.map((img, index) => (
          <div
            className={`slide ${index === current ? 'active' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </section>
  );
}
