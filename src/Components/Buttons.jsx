import { Link } from "react-router";

const Buttons = ({link, text}) => {
    return (
        <div>
            <Link to={`/${link}`} className="all-apps-link"><button className="all-apps-btn">{text}</button></Link>
        </div>
    );
};

export default Buttons;