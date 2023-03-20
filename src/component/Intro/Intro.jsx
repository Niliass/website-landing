import "./Intro.scss";

export default function Intro() {
  return (
    <section className={"intro"}>
      <div className={`container`}>
        <article className={"intro__info"}>
          <h1 className={"intro__title"}>Welcome, To Sky World</h1>
          <p className={"intro__desc"}>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </article>
        <div className={"intro__img"}>
          <img src="./images/landing-image.png" alt="landing image" />
        </div>
      </div>
      <button className={"intro__btn"}>
        <i className="fa-solid fa-angles-down"></i>
      </button>
    </section>
  );
}
