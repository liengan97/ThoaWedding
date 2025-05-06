"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import img from '@/images/FHDie4iPjN.jpg'

export default function ParallaxImage({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Image
        src={img}
        alt="Parallax Background"
        fill
        style={{
          transform: `translateY(${scrollY * 0.5}px)`, // Adjust speed factor
          transition: "transform 0.1s ease-out"
        }}
      />
      {children}
    </div>
  );
}
