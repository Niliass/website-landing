import { useState } from "react";
import Title from "../Title/Title";
import "./Features.scss";
import Data from "./FeaturesData";

export default function Features() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <Title>Features</Title>
      <div className={`grid container`}>
        {data &&
          data.map(({ img, title, description }, idx) => {
            return (
              <div className={"feature"} key={idx}>
                <div className={"feature__img"}>
                  <img src={img} alt="feature image" />
                </div>
                <div className={"feature__info"}>
                  <h3 className={"feature__title"}>{title}</h3>
                  <p className={"feature__desc"}>{description}</p>
                  <a href="/" className={"feature__btn"}>
                    More
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </article>
  );
}
