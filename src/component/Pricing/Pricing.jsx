import { useState } from "react";
import Title from "../Title/Title";
import Data from "./PricingData.js";
import "./Pricing.scss";

export default function Pricing() {
  const [data, setData] = useState(Data);
  const popular = data.reduce(
    (preVal, { sells }) => (sells > preVal ? sells : preVal),
    0
  );
  return (
    <article className="art">
      <Title>Pricing Plans</Title>
      <div className="grid container">
        {data &&
          data.map(
            (
              { plan, img, price, space, emails, subdomains, databases, sells },
              idx
            ) => {
              return (
                <div
                  className={`plan${sells === popular ? " popular" : ""}`}
                  key={idx}
                >
                  {sells === popular && (
                    <p className="popular__content">Most Popular</p>
                  )}
                  <div className={"plan__head"}>
                    <h3 className={"plan__title"}>{plan}</h3>
                    <img src={img} alt="plan image" className={"plan__img"} />
                    <div className={"plan__price"}>{`$${price}`}</div>
                    <p className={"plan__dur"}>Per Month</p>
                  </div>
                  <ul className={"plan__features"}>
                    <li className={"plan__feature"}>
                      <i
                        className={`fa-solid fa-check plan__feature--icon`}
                      ></i>
                      <p
                        className={"plan__feature--content"}
                      >{`${space}GB HDD Space`}</p>
                    </li>
                    <li className={"plan__feature"}>
                      <i
                        className={`fa-solid fa-check plan__feature--icon`}
                      ></i>
                      <p
                        className={"plan__feature--content"}
                      >{`${emails} Email Addresses`}</p>
                    </li>
                    <li className={"plan__feature"}>
                      <i
                        className={`fa-solid fa-check plan__feature--icon`}
                      ></i>
                      <p
                        className={"plan__feature--content"}
                      >{`${subdomains} Subdomains`}</p>
                    </li>
                    <li className={"plan__feature"}>
                      <i
                        className={`fa-solid fa-check plan__feature--icon`}
                      ></i>
                      <p
                        className={"plan__feature--content"}
                      >{`${databases} Databases`}</p>
                    </li>
                    <li className={"plan__feature"}>
                      <i
                        className={`fa-solid fa-check plan__feature--icon`}
                      ></i>
                      <p
                        className={"plan__feature--content"}
                      >{`${plan} Support`}</p>
                    </li>
                  </ul>
                  <button className={"plan__btn"}>Choose Plan</button>
                </div>
              );
            }
          )}
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
