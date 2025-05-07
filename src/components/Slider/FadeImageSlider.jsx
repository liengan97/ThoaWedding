"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { courgette, fzPhotograph } from "@/utils/font.util";
import { k } from "@/config/photo.config";
import * as styles from './styles.module.css'

function FadeImageSlider({ photos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative min-h-[100vh] w-screen bg-black min-h-[-webkit-fill-available]">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 h-full w-full bg-cover transition-opacity duration-[2000ms] bg-center ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${photo.url})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />

          <div className="absolute inset-0 flex items-center justify-end lg:justify-center flex-col">
            <div className="flex px-5">
              <h1 className={`text-white text-lg md:text-4xl lg:text-5xl font-bold text-center ${fzPhotograph.className} ${styles.title}`}>
                Hửu Tài & Kim Ngân
              </h1>
            </div>
            <div className="lg:pt-5 pb-20">
              <p className={`text-sm md:text-2xl lg:text-3xl font-bold text-white text-center ${courgette.className}`}>
                We're getting Married
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FadeImageSlider;
