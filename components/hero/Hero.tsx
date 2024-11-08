"use client"

import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "/hero/carousel1.jpg",
    //   title: "Welcome to iCoder",
    //   description: "Technology News, Development and Trends",
    },
    {
      img: "/hero/carousel2.jpg",
    //   title: "The best coding Blog",
    //   description: "Technology News, Development and Trends",
    },
    {
      img: "/hero/carousel3.jpg",
    //   title: "Award Winning coding Blog",
    //   description: "Technology News, Development and Trends",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide.img} alt="" className="w-full h-[630px] object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              {/* <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-black p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-black p-2 rounded-full"
      >
        &#10095;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
