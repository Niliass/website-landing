import { useState } from "react";
import Data from "./StateData";
import "./State.scss";

export default function State() {
  const [data, setData] = useState(Data);
  return (
    <article className={"stats"}>
      <h2 className={"stats__title"}>Our Awesome Stats</h2>
      <div className={`container`}>
        {data &&
          data.map(({ icon, stat, title }, idx) => {
            return (
              <div className={"stat"} key={idx}>
                <i className={`${icon} ${"stat--icon"}`}></i>
                <h3 className={"stat__num"}>{stat}</h3>
                <h4 className={"stat__title"}>{title}</h4>
              </div>
            );
          })}
      </div>
      <img
        src="./images/stats.jpg"
        alt="state background image"
        className={"stats__bg"}
      />
    </article>
  );
}
