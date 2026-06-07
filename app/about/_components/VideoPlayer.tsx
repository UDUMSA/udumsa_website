"use client";

import { PlayIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [overlayVisible, setOverlayVisible] = useState(true);

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <video id="video" src="/udumsa.mp4" className="" ref={videoRef} />

      <div
        className={`z-10 absolute inset-0 bg-black/60 flex items-center justify-center ${overlayVisible ? "block" : "hidden"}`}
      >
        <button
          className="cursor-pointer"
          onClick={() => {
            setOverlayVisible(false);
            videoRef.current?.play();
            if (videoRef.current) {
              videoRef.current.controls = true;
            }
          }}
        >
          <PlayIcon className="fill-white" size={72} />
        </button>
      </div>
    </div>
  );
}
