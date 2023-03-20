import { useState } from "react";
import Title from "../Title/Title";
import Data from "./SkillsData";
import "./Skills.scss";

export default function Skills() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <Title>OUR SKILLS</Title>
      <div className={`container skills__content`}>
        <img
          src="./images/skills.png"
          alt="skills section image"
          className={"skills__img"}
        />
        <div className={"skills__holder"}>
          {data &&
            data.map(({ skill, progress }, idx) => {
              return (
                <div className={"skill"} key={idx}>
                  <div className={"skill__head"}>
                    <h3 className={"skill__title"}>{skill}</h3>
                    <p className={"skill__progress"}>{progress}</p>
                  </div>
                  <div
                    className={"skill__progress--bar"}
                    style={{ "--progress": `${progress}` }}
                  ></div>
                </div>
              );
            })}
        </div>
      </div>
    </article>
  );
}
