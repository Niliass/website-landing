import "./Title.scss";

export default function Title({ children }) {
  return (
    <div className="title">
      <h2>{children}</h2>
    </div>
  );
}
