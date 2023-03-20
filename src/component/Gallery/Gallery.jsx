import { useState } from "react";
import "./Gallery.scss";
import Title from "../Title/Title";
import Data from "./galleryData.js";

export default function Gallery() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <div className="bg"></div>
      <Title>Gallery</Title>
      <div className="container grid">
        {data &&
          data.map((img, idx) => {
            return (
              <div className={"gallery__box"} key={idx}>
                <div className={"gallery__holder"}>
                  <img className={"gallery--img"} src={img} />
                </div>
              </div>
            );
          })}
      </div>
    </article>
  );
}
