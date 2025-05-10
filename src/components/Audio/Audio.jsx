'use client'

import { getRandom } from "@/utils/app.util";
import { useEffect, useRef } from "react";

export default function Audio({ files, isPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = getRandom(files);

    audioRef.current.addEventListener("ended", () => {
      audioRef.current.play();
    });

    return () => {
      audioRef?.current?.removeEventListener("ended", () => {
        audioRef.current.play();
      });
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play().catch(_ => {
        console.warn("Autoplay blocked")
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  return (
    <audio ref={audioRef} autoPlay>
      <source src={audioRef.current} type="audio/mp3" />
    </audio>
  );
}
