import { useState } from "react";
import Title from "../Title/Title";
import "./Testimonials.scss";
import Data from "./TestimonialsData";

export default function Testimonials() {
  const [data, setData] = useState(Data);
  return (
    <article className="art">
      <Title>Testimonials</Title>
      <div className="grid container">
        {data &&
          data.map(({ img, name, job, stars, content }, idx) => {
            return (
              <div className={"testimonial"} key={idx}>
                <img
                  src={img}
                  alt="testimonial image"
                  className={"testimonial__img"}
                />
                <h2 className={"testimonial__title"}>{name}</h2>
                <p className={"testimonial__job"}>{job}</p>
                <div className={"testimonial__stars"}>
                  {Array.from({ length: 5 }, (_, idx) => {
                    return (
                      <i
                        className={`${
                          idx + 1 <= stars ? `filled fas` : "far"
                        } fa-star`}
                        key={idx}
                      ></i>
                    );
                  })}
                </div>
                <p className={"testimonial__content"}>{content}</p>
              </div>
            );
          })}
      </div>
    </article>
  );
}
