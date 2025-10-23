import { Link } from "react-router";

const Buttons = ({ link, text, onClick }) => {
  if (link) {
    return (
      <Link to={`/${link}`} className="all-apps-link">
        <button className="all-apps-btn">{text}</button>
      </Link>
    );
  }

  return onClick ? (
      <button onClick={onClick} className="all-apps-btn">
        {text}
      </button>
    ) : (
    <button className="all-apps-btn">{text}</button>
  );



};

export default Buttons;
