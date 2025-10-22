import { Link } from "react-router";

const Buttons = ({ link, text }) => {
  if (link) {
    return (
      <Link to={`/${link}`} className="all-apps-link">
        <button className="all-apps-btn">{text}</button>
      </Link>
    );
  }
  return <button className="all-apps-btn">{text}</button>;
};

export default Buttons;
