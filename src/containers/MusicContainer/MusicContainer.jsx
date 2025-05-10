'use client'

import { useState } from "react";
import { faDrum, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Audio from "@/components/Audio/Audio";

function MusicContainer() {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <>
      <Audio isPlaying={isPlaying} files={process.env.NEXT_PUBLIC_AUDIO_FILES?.split(",")} />
      <div className="flex justify-center items-center cursor-pointer">
        {!isPlaying && (
          <div onClick={() => setPlaying(true)}>
            <FontAwesomeIcon className="text-white" icon={faMusic} />
            <span className="text-white pl-1 text-sm"> Play</span>
          </div>
        )}
        {
          isPlaying && (
            <div className="animate-bounce" onClick={() => setPlaying(false)}>
              <FontAwesomeIcon className="text-white" icon={faDrum} />
              <FontAwesomeIcon className="text-white px-1" icon={faMusic} />
              <FontAwesomeIcon className="text-white" icon={faDrum} />
            </div>
          )
        }
      </div>
    </>
  )
}

export default MusicContainer;