import "./Discount.scss";

export default function Discount() {
  return (
    <article className={"discount"}>
      <div className={"discount__info"}>
        <h3 className={"discount__title"}>We Have A Discount</h3>
        <p className={"discount__desc"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          asperiores consectetur, recusandae ratione provident necessitatibus,
          cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <img
          src="./images/discount.png"
          alt="discount image"
          className={"discount__img"}
        />
        <div className={"discount__bg"}></div>
      </div>
      <div className={"discount__form"}>
        <h3 className={"discount__form--title"}>Request A Discount</h3>
        <form action="" className={"discount__form--content"}>
          <input
            type="text"
            className={"discount__form--input"}
            placeholder={"Your Name"}
          />
          <input
            type="mail"
            className={"discount__form--input"}
            placeholder={"Your Email"}
          />
          <input
            type="text"
            className={"discount__form--input"}
            placeholder={"Your Phone"}
          />
          <textarea
            className={"discount__form--textarea"}
            placeholder={"Tell Us About Your Needs"}
          ></textarea>
          <button type="submit" className={"discount__form--sub"}>
            Send
          </button>
        </form>
      </div>
    </article>
  );
}
