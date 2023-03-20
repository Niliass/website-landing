import { useState, useEffect } from "react";
import Title from "../Title/Title";
import "./Events.scss";

export default function Events() {
  const [date, setDate] = useState(() => getDate());
  useEffect(() => {
    const counter = setInterval(() => setDate(getDate(counter)), 1000);
  });
  function getDate(counter) {
    const gap = Date.parse("04/01/2023") - new Date();
    const [getD, getH, getM, getS] = [
      1000 * 60 * 60 * 24,
      1000 * 60 * 60,
      1000 * 60,
      1000,
    ];
    const obj = {
      d: Math.floor(gap / getD),
      h: Math.floor((gap % getD) / getH),
      m: Math.floor((gap % getH) / getM),
      s: Math.floor((gap % getM) / getS),
    };
    if (!(obj.d + obj.h + obj.m + obj.s)) {
      clearInterval(counter);
      return obj;
    }
    return obj;
  }
  return (
    <article className="art">
      <Title>Latest Events</Title>
      <div className={`container`}>
        <div className={"events__holder"}>
          <img
            src="./images/events.png"
            alt="events image"
            className={"events__img"}
          />
          <div className={"events__info"}>
            <div className={"events__date"}>
              <div className={"events__time"}>
                <div className={"events__time--left"}>
                  {`${date.d}`.padStart(2, "0")}
                </div>
                <h3 className={"events__time--unit"}>Days</h3>
              </div>
              <div className={"events__time"}>
                <div className={"events__time--left"}>
                  {`${date.h}`.padStart(2, "0")}
                </div>
                <h3 className={"events__time--unit"}>Hours</h3>
              </div>
              <div className={"events__time"}>
                <div className={"events__time--left"}>
                  {`${date.m}`.padStart(2, "0")}
                </div>
                <h3 className={"events__time--unit"}>Minutes</h3>
              </div>
              <div className={"events__time"}>
                <div className={"events__time--left"}>
                  {`${date.s}`.padStart(2, "0")}
                </div>
                <h3 className={"events__time--unit"}>Seconds</h3>
              </div>
            </div>
            <h2 className={"events__title"}>Tech Masters Event 2021</h2>
            <p className={"events__desc"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
        <form action="" className={"events__form"}>
          <input
            type="email"
            placeholder="Enter Your Email"
            className={"events__form--input"}
          />
          <button type="submit" className={"events__form--sub"}>
            Subscribe
          </button>
        </form>
      </div>
      <img
        src="./images/dots.png"
        alt="dots image"
        className="dots__bg--left"
      />
      <img
        src="./images/dots.png"
        alt="dots image"
        className="dots__bg--right"
      />
    </article>
  );
}
