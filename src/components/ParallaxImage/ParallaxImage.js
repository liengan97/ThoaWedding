"use client"
import Image from "next/image";
import img from '@/images/FHDie4iPjN.jpg'

export default function ParallaxImage({ children }) {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Image
        src={img}
        alt="Parallax Background"
        fill
      />
      {children}
    </div>
  );
}
