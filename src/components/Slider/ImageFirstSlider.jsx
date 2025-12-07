"use client";
import React, { useState, useEffect } from "react";
import { courgette, fzPhotograph } from "@/utils/font.util";
import * as styles from "./styles.module.css";
import useEventPassed from "@/hooks/useEventPassed";

function ImageFirstSlider({ photos = [] }) {
  const isEventPassed = useEventPassed();
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
          className={`absolute top-0 left-0 h-full w-full bg-cover transition-opacity duration-[2000ms] bg-center ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${photo.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-10" />

          {/* Tên cặp đôi ở trên */}
          <div className="absolute top-20 w-full flex justify-center px-5">
            <h1
              className={`text-red-800 text-lg md:text-4xl lg:text-5xl text-center 
                          ${fzPhotograph.className} ${styles.title} ${styles.titleStroke}`}
            >
              Hoàng Tiến & Kim Thoa
            </h1>
          </div>

          <div className="absolute bottom-30 w-full flex justify-center">
            <div className="w-full flex justify-center">
              <div className="flex flex-col items-center w-1/2 space-y-4">
                {/* Tiêu đề */}
                <p className="md:text-xl lg:text-3xl text-red-800 text-center">
                  THƯ MỜI TIỆC CƯỚI
                </p>

                <div className="w-full border-t-2 border-red-800"></div>

                <p
                  className={`md:text-xl lg:text-3xl font-bold text-red-700 text-center px-1 font-serif ${styles.titleStroke}`}
                >
                  CHỦ NHẬT - <span className={`text-2xl  lg:text-5xl font-bold text-red-700 text-center ${styles.titleStroke}`}>11:00</span> 
                </p>

                <p
                  className={`text-3xl md:text-6xl lg:text-7xl font-extrabold text-red-700 text-center font-serif ${styles.titleStroke}`}
                >
                  04 . 01 . 2026
                </p>
                <div className="w-full border-t-2 border-red-800"></div>

                <p className="md:text-xl lg:text-3xl text-red-800 text-center font-serif">
                  TRÂN TRỌNG KÍNH MỜI!
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageFirstSlider;
