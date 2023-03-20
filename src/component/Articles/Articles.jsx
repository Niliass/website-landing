import { useState } from "react";
import "./Articles.scss";
import Title from "../Title/Title";
import { Data } from "./ArticlesData";

export default function Article() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <Title>Articles</Title>
      <div className={`container articles__content`}>
        {data &&
          data.map(({ img, title, description }, idx) => {
            return (
              <div className={"article"} key={idx}>
                <img src={img} alt="" />
                <div className={"article__info"}>
                  <h3>{title}</h3>
                  <p className={"article__para"}>{description}</p>
                </div>
                <a href="/" className={"article__link"}>
                  Read More
                  <i
                    className={`fas fa-long-arrow-alt-right article__link--icon`}
                  ></i>
                </a>
              </div>
            );
          })}
      </div>
    </article>
  );
}
