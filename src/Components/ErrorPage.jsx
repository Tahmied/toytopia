import { Helmet } from "react-helmet";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found | ToyTopia</title>
            </Helmet>
            <div className='app-not-found'>
                <div className="app-not-found-container">
                    <img src="/assets/404.png" alt="" className="error-img" />
                    <p className="not-found-text">OPPS, PAGE NOT FOUND!</p>
                    <p className="not-found-desc">The page you are requesting is not found on our system.</p>
                    <Link to={-1}>
                        <button className="back-btn-not-found"> Go Back</button>
                    </Link>
                </div>
            </div>
        </>

    );
};


export default ErrorPage;