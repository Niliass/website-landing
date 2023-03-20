import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [isActive, setActive] = useState(false);
  return (
    <header>
      <div className={`container`}>
        <a href="/" className={"header__logo"}>
          <img src="./images/logo.png" alt="header logo" />
        </a>
        <nav className={"header__nav"}>
          <li>
            <a href="#" className={"header__nav--link"}>
              Articles
            </a>
          </li>
          <li>
            <a href="" className={"header__nav--link"}>
              Gallery
            </a>
          </li>
          <li>
            <a href="" className={"header__nav--link"}>
              Features
            </a>
          </li>
          <li>
            <button
              className={"header__nav--link"}
              onClick={() => setActive(!isActive)}
            >
              Other Links
            </button>
            <ul className={`header__mega--nav${isActive ? " active" : ""}`}>
              <img
                src="./images/megamenu.png"
                className={"header__mega--nav--img"}
              />
              <ul className={"header__mega--nav--links"}>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="far fa-comments fa-fw"></i>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="far fa-user fa-fw"></i>
                    Team Members
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="far fa-building fa-fw"></i>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="far fa-check-circle fa-fw"></i>
                    Our Skills
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="far fa-clipboard fa-fw"></i>
                    How It Works
                  </a>
                </li>
              </ul>
              <ul className={"header__mega--nav--links"}>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="far fa-calendar-alt fa-fw"></i>
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="fas fa-server fa-fw"></i>
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="far fa-play-circle fa-fw"></i>
                    Top Videos
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="fa-solid fa-chart-column"></i>
                    Stats
                  </a>
                </li>
                <li>
                  <a href="#" className={"header__mega--nav--link"}>
                    <i className="fas fa-percent fa-fw"></i>
                    Request A Discount
                  </a>
                </li>
              </ul>
            </ul>
          </li>
        </nav>
      </div>
    </header>
  );
}
