"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

function FadeImageSlider({ photos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative h-screen w-screen bg-black">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 h-full w-full bg-cover transition-opacity duration-[2000ms] bg-center ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${photo.url})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="flex">
              <h1 className="text-white text-4xl md:text-5xl font-bold text-center cgt" style={{ fontSize: '68px' }}>
                Hửu Tài & Kim Ngân
              </h1>
            </div>
            <div style={{ width: '30px', height: '30px', marginTop: '2rem', marginBottom: '2rem' }}>
              <Image alt="" fill src="/CFIiT6KZn3.png" />
            </div>
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold text-center cgt" style={{ fontSize: '30px'}}>
                We're getting Married
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FadeImageSlider;
