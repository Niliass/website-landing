import { useState } from "react";
import Data from "../Gallery/galleryData";
import "./Footer.scss";

export default function Footer() {
  const [data, setData] = useState(Data);
  return (
    <footer className={"footer"}>
      <div className={`container`}>
        <div className={"footer__logo--grp"}>
          <img
            src="./images/logo.png"
            alt="footer logo"
            className={"footer__img"}
          />
          <ul className={"footer__social"}>
            <li>
              <a
                href="#"
                className={"footer__social--link"}
                style={{ "--alt-color": "#1877f2" }}
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={"footer__social--link"}
                style={{ "--alt-color": "#1da1f2" }}
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={"footer__social--link"}
                style={{ "--alt-color": "#ff0000" }}
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
          <p className={"footer__desc"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <ul className={"footer__links"}>
          <li className={"footer__item"}>
            <a href="#" className={"footer__link"}>
              <i className={`fa-solid fa-angles-right footer__link--icon`}></i>
              Important Link 1
            </a>
          </li>
          <li className={"footer__item"}>
            <a href="#" className={"footer__link"}>
              <i className={`fa-solid fa-angles-right footer__link--icon`}></i>
              Important Link 2
            </a>
          </li>
          <li className={"footer__item"}>
            <a href="#" className={"footer__link"}>
              <i className={`fa-solid fa-angles-right footer__link--icon`}></i>
              Important Link 3
            </a>
          </li>
          <li className={"footer__item"}>
            <a href="#" className={"footer__link"}>
              <i className={`fa-solid fa-angles-right footer__link--icon`}></i>
              Important Link 4
            </a>
          </li>
          <li className={"footer__item"}>
            <a href="#" className={"footer__link"}>
              <i className={`fa-solid fa-angles-right footer__link--icon`}></i>
              Important Link 5
            </a>
          </li>
        </ul>
        <div className={"footer__info"}>
          <div className={"footer__info--container"}>
            <i className={`fas fa-map-marker-alt fa-fw footer__info--icon`}></i>
            <address className={"footer__info--address"}>
              Egypt, Giza, Inside The Sphinx, Room Number 220
            </address>
          </div>
          <div className={"footer__info--container"}>
            <i className={`far fa-clock fa-fw footer__info--icon`}></i>
            <p className={"footer__info--time"}>
              Business Hours: From 10:00 To 18:00
            </p>
          </div>
          <div className={"footer__info--container"}>
            <i className={`fas fa-phone-volume fa-fw footer__info--icon`}></i>
            <div className={"footer__info--phones"}>
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div className={"footer__gallery"}>
          {data &&
            data.map((img, idx) => {
              return (
                <img
                  src={img}
                  alt="footer gallery image"
                  key={idx}
                  className={"footer__gallery--img"}
                />
              );
            })}
        </div>
      </div>
    </footer>
  );
}
