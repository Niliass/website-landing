import { useState } from "react";
import Title from "../Title/Title";
import Data from "./WorksData";
import "./Works.scss";

export default function Works() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <Title>HOW IT WORKS ?</Title>
      <div className={`container works__content`}>
        <img
          src="./images/work-steps.png"
          alt="works image"
          className={"works__img"}
        />
        <div className={"works__holder"}>
          {data &&
            data.map(({ img, work, description }, idx) => {
              return (
                <div className={"work"} key={idx}>
                  <img src={img} alt="work image" className={"work__img"} />
                  <div>
                    <h3 className={"work__title"}>{work}</h3>
                    <p className={"work__desc"}>{description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </article>
  );
}
