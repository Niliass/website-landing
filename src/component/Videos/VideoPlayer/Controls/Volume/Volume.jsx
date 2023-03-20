import { useState, useRef } from "react";
import "./Volume.scss";

export default function Volume({ cls }) {
  const [volIcon, setVolIcon] = useState("high");
  const [percent, setPercent] = useState(100);
  const [isScrolling, setScrolling] = useState(false);
  const Vol = useRef({});
  const handleMuted = () => {
    const ref = Vol.current;
    const video = document.querySelector("video");
    if (volIcon === "muted") {
      setVolIcon(ref.volume >= 0.5 ? "high" : "low");
      setPercent(ref.percent);
      video.volume = ref.volume;
      return;
    }
    setVolIcon("muted");
    ref.volume = video.volume;
    ref.percent = percent;
    setPercent(0);
    video.volume = 0;
  };
  function pointerDown(e) {
    handleVolume(e);
    const Volume = document.querySelector(".volume__bar");
    Volume.setPointerCapture(e.pointerId);
    setScrolling(true);
  }
  function handleVolume(e) {
    const video = document.querySelector("video");
    const rect = e.currentTarget.getBoundingClientRect();
    const gap = e.clientX - rect.left < 0 ? 0 : e.clientX - rect.left;
    const curVol = gap / rect.width;
    setPercent(curVol >= 1 ? 100 : curVol * 100);
    setVolIcon(!curVol ? "muted" : curVol > 0.5 ? "high" : "low");
    video.volume = curVol >= 1 ? 1 : curVol;
  }
  return (
    <div className={"volume"}>
      <button className={cls} onClick={handleMuted}>
        {volIcon === "high" && (
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
            />
          </svg>
        )}
        {volIcon === "low" && (
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
            />
          </svg>
        )}
        {volIcon === "muted" && (
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
            />
          </svg>
        )}
      </button>
      <div
        className={"volume__bar"}
        onPointerDown={pointerDown}
        onPointerMove={(e) => isScrolling && handleVolume(e)}
        onPointerUp={() => setScrolling(false)}
      >
        <div
          className={"volume__line"}
          style={{ "--percent": `${percent}` }}
        ></div>
      </div>
    </div>
  );
}
