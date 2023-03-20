import { useState } from "react";
import StateBtn from "./Controls/StateBtn";
import Volume from "./Controls/Volume/Volume";
import FullScreenBtn from "./Controls/FullScreenBtn";
import TimeLine from "./Controls/TimeLine/TimeLine";
import "./VideoPlayer.scss";

export default function VideoPlayer({
  src,
  poster,
  autoPlay,
  isFirst,
  isLast,
  next,
  previous,
}) {
  const [isPlay, setPlay] = useState(false);
  const [currTime, setCurrTime] = useState("0:00");
  const [dur, setDur] = useState(0);
  const [percent, setPercent] = useState(0);

  const timeFormat = (time) => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time / 60) % 60);
    const s = Math.floor(time % 60);
    if (h) {
      return `${h}:${`${m}`.padStart(2, "0")}:${`${s}`.padStart(2, "0")}`;
    } else {
      return `${m}:${`${s}`.padStart(2, "0")}`;
    }
  };
  const togglePlay = () => {
    const video = document.querySelector("video");
    if (isPlay) {
      setPlay(false);
      video.pause();
      return;
    }
    setPlay(true);
    video.play();
  };
  const handleUpditeTime = (e) => {
    const video = document.querySelector("video");
    setCurrTime(timeFormat(e.target.currentTime));
    setPercent((video.currentTime / video.duration) * 100);
    if (video.duration === video.currentTime) next();
  };
  return (
    <div className={`videoPlayer${isPlay ? "" : " pause"}`}>
      <video
        src={src}
        onClick={togglePlay}
        onTimeUpdate={handleUpditeTime}
        onLoadedData={(e) => setDur(timeFormat(e.target.duration))}
        autoPlay={autoPlay}
        onPlay={() => setPlay(true)}
        poster={poster}
      ></video>
      <div className={"videoPlayer__container"}>
        <TimeLine
          percent={percent}
          setPercent={setPercent}
          setCurrTime={setCurrTime}
          timeFormat={timeFormat}
        />
        <div className={"video__controls"}>
          {!isFirst && (
            <button className="video__controls--btn" onClick={previous}>
              <svg version="1.0" viewBox="0 0 30.000000 30.000000">
                <g
                  transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M60 150 c0 -73 3 -90 15 -90 12 0 15 17 15 90 0 73 -3 90 -15 90 -12 0 -15 -17 -15 -90z" />
                  <path d="M170 200 c-30 -22 -56 -44 -58 -48 -2 -8 109 -92 122 -92 3 0 6 40 6 90 0 50 -3 90 -7 90 -5 0 -33 -19 -63 -40z" />
                </g>
              </svg>
            </button>
          )}
          <StateBtn
            isPlay={isPlay}
            togglePlay={togglePlay}
            cls={"video__controls--btn"}
          />
          {!isLast && (
            <button className="video__controls--btn" onClick={next}>
              <svg version="1.0" viewBox="0 0 30.000000 30.000000">
                <g
                  transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M60 150 c0 -50 3 -90 6 -90 10 0 124 83 124 90 0 7 -114 90 -124 90 -3 0 -6 -40 -6 -90z" />
                  <path d="M210 150 c0 -73 3 -90 15 -90 12 0 15 17 15 90 0 73 -3 90 -15 90 -12 0 -15 -17 -15 -90z" />
                </g>
              </svg>
            </button>
          )}
          <Volume cls={"video__controls--btn"} />
          <div className={"video__controls__time"}>
            {currTime} / {dur}
          </div>
          <FullScreenBtn cls={"video__controls--btn"} />
        </div>
      </div>
    </div>
  );
}
