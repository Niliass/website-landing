import { useState } from "react";
import Title from "../Title/Title";
import Data from "./ServicesData";
import "./Services.scss";

export default function Services() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <div className="bg"></div>
      <Title>Services</Title>
      <div className="grid container">
        {data &&
          data.map(({ service, icon }, idx) => {
            return (
              <div className={"service"} key={idx}>
                <div className={"service__head"}>
                  <i className={icon}></i>
                  <h3 className={"service__title"}>{service}</h3>
                </div>
                <div className={"service__holder"}>
                  <div className={"service__num"}>{`0${idx + 1}`}</div>
                  <a href="/" className={"service__link"}>
                    Details
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </article>
  );
}
