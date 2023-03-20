import { useState } from "react";
import "./TimeLine.scss";

export default function TimeLine({
  percent,
  setPercent,
  setCurrTime,
  timeFormat,
}) {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setScrolling] = useState(false);

  const PointerDown = (e) => {
    document.querySelector("#timeLine").setPointerCapture(e.pointerId);
    getCurrTime(e);
    setScrolling(true);
  };
  const PointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const gap = e.clientX - rect.left < 0 ? 0 : e.clientX - rect.left;
    setProgress(e.clientX >= rect.right ? rect.right : gap);
    if (isScrolling) getCurrTime(e);
  };
  const getCurrTime = (e) => {
    const video = document.querySelector("video");
    const rect = e.currentTarget.getBoundingClientRect();
    const curTime = progress / rect.width;
    setPercent(curTime >= 1 ? 100 : curTime * 100);
    setCurrTime(
      curTime >= 1
        ? timeFormat(video.duration)
        : timeFormat(curTime * video.duration)
    );
    video.currentTime =
      curTime >= 1 ? video.duration : curTime * video.duration;
  };
  return (
    <div
      className={"timeLine__bar"}
      style={{ "--progress": `${progress}` }}
      onPointerDown={PointerDown}
      onPointerUp={() => setScrolling(false)}
      onPointerMove={PointerMove}
      id={"timeLine"}
    >
      <div className={"timeLine"} style={{ "--percent": `${percent}` }}></div>
    </div>
  );
}
