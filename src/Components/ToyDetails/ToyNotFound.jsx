import { Link } from "react-router";

const ToyNotFound = () => {
    return (
        <div className='app-not-found'>
            <div className="app-not-found-container">
                <p className="not-found-text">OPPS!! TOY NOT FOUND</p>
                <p className="not-found-desc">The Toy you are requesting is not found on our system.  please try another toy</p>
                <Link to={-1}>
                <button className="back-btn-not-found">Go Back!</button>
                </Link>
            </div>
        </div>
    );
};

export default ToyNotFound;