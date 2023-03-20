import { useState } from "react";
import Title from "../Title/Title";
import Data from "./TeamData";
import "./Team.scss";

export default function Team() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <Title>Team Members</Title>
      <div className="grid container">
        {data &&
          data.map(({ img, name, description }, idx) => {
            return (
              <div className={"team"} key={idx}>
                <div className={"team__holder"}>
                  <img
                    src={img}
                    alt="team member image"
                    className={"team__img"}
                  />
                  <div className={"team__social"}>
                    <a href="#" className={"team__social--link"}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className={"team__social--link"}>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className={"team__social--link"}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className={"team__social--link"}>
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className={"team__info"}>
                  <h3 className={"team__name"}>{name}</h3>
                  <p className={"team__desc"}>{description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </article>
  );
}
