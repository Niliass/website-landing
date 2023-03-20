import { useState } from "react";
import Title from "../Title/Title";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Data from "./VideosData";
import "./Videos.scss";

export default function Videos() {
  const [data, setData] = useState(Data);
  const [title, setTitle] = useState(data[0].title);
  const [src, setSrc] = useState(data[0].src);
  const [poster, setPoster] = useState(data[0].poster);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isLast, setLast] = useState(false);
  const [isFirst, setFirst] = useState(true);
  const [isShuffle, setShuffle] = useState(false);
  const [shuffleData, setShuffleData] = useState(data);

  const handleCurrVideo = (e) => {
    const curBtn = e.currentTarget;
    const btns = [...document.querySelectorAll('[data-btn="videoBtn"]')];
    const nextVideo = data[btns.indexOf(curBtn)];
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    curBtn.classList.add("active");
    setVideo(nextVideo);
  };

  const next = () => {
    const btns = [...document.querySelectorAll('[data-btn="videoBtn"]')];
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    if (isShuffle) {
      shuffle(btns, "next");
    } else {
      const nextIdx = data.findIndex((video) => video.title === title) + 1;
      btns[nextIdx].classList.add("active");
      if (nextIdx === data.length) return;
      if (nextIdx === data.length - 1) setLast(true);
      setVideo(data[nextIdx]);
    }
    setFirst(false);
    setAutoPlay(true);
  };

  const previous = () => {
    const btns = [...document.querySelectorAll('[data-btn="videoBtn"]')];
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    if (isShuffle) {
      shuffle(btns, "prev");
    } else {
      const nextIdx = data.findIndex((video) => video.title === title) - 1;
      btns[nextIdx].classList.add("active");
      if (nextIdx < 0) return;
      if (nextIdx === 0) setFirst(true);
      setVideo(data[nextIdx]);
    }
    setLast(false);
  };

  const shuffle = (btns, btn) => {
    const curIdx = data.findIndex((video) => video.title === title);
    const shfData = shuffleData.filter((video) => video.title !== title);
    const nextIdx = Math.floor(Math.random() * shuffleData.length);
    setVideo(shuffleData[nextIdx]);
    btns[curIdx].classList.add("active");
    if (shfData.length === 0) {
      setShuffleData(data);
      btn === "next" ? setLast(true) : setFirst(true);
      return;
    }
    setShuffleData(shfData);
  };

  const setVideo = (video) => {
    setTitle(video.title);
    setSrc(video.src);
    setPoster(video.poster);
  };

  return (
    <article className="art">
      <Title>Top Videos</Title>
      <div className={`container videos__content`}>
        <ul className={"videos__list"}>
          <li className={"videos__list--head"}>
            <p className={"videos__list--title"}>Top videos</p>
            <button
              className={isShuffle ? "shuffle" : ""}
              onClick={() => setShuffle(!isShuffle)}
            >
              <i className="fas fa-random"></i>
            </button>
          </li>
          {data &&
            data.map(({ title, duration }, idx) => {
              return (
                <li className={"video"} key={idx}>
                  <button
                    className={`video__btn${idx === 0 ? " active" : ""}`}
                    data-btn={"videoBtn"}
                    onClick={handleCurrVideo}
                  >
                    <p className={"video__title"}>{title}</p>
                    <p className={"video__dur"}>{duration}</p>
                  </button>
                </li>
              );
            })}
        </ul>
        <div className={"curVideo"}>
          <VideoPlayer
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            isFirst={isFirst}
            isLast={isLast}
            next={next}
            previous={previous}
          />
          <h3 className={"curVideo__title"}>{title}</h3>
        </div>
      </div>
    </article>
  );
}
