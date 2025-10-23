import { Helmet } from "react-helmet";
import { Link } from "react-router";

const NoToys = () => {
    return (
        <>
            <Helmet>
                <title>Tried Toys | ToyTopia</title>
            </Helmet>
            <div className='app-not-found'>
                <div className="app-not-found-container">
                    <p className="not-found-text">No toys tried yet!</p>
                    <p className="not-found-desc">Explore the toys collection and try some out</p>
                    <Link to={'/toys'}>
                        <button className="back-btn-not-found"> All Toys</button>
                    </Link>
                </div>
            </div>
        </>

    );
};

export default NoToys;