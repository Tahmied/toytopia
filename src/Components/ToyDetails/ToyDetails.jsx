import { useLoaderData, useParams } from "react-router";
import Buttons from "../Buttons";
import './todetails.css';
import ToyNotFound from "./ToyNotFound";

function findAppById(apps, id) {
    const numericId = Number(id); 
    return apps.find(app => app.toyId === numericId);
}

const ToyDetails = () => {
    const appId = useParams()
    const allApps = useLoaderData()
    let appToShow = findAppById(allApps, appId.toyid)
    if (!appToShow) {
        return <ToyNotFound></ToyNotFound>
    }

    if (!Number.isInteger(Number(appId.toyid))) {
        return <ToyNotFound></ToyNotFound>
    }

    return (
        <>
            <section className="app-details">
                <div className="app-details-container">
                    <div className="app-details-icon">
                        <img src={appToShow.pictureURL} alt="" className="app-details-icon-img" />
                    </div>
                    <div className="app-details-right">
                        <p className="app-name-title">{appToShow.toyName}</p>
                        <p className="app-developed-by">Seller Name <span className="company-developer">{appToShow.sellerName}</span> </p>
                        <hr className="app-details-line" />
                        <div className="app-details-states">
                            <div className="downloads-states">
                                <img src="/assets/icon-downloads.png" alt="" className="download-details" />
                                <p className="download-detail-tag">In Stock</p>
                                <p className="download-detail-num">{appToShow.availableQuantity}</p>
                            </div>
                            <div className="downloads-states">
                                <img src="/assets/icon-ratings.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Average Ratings</p>
                                <p className="download-detail-num">{appToShow.rating}</p>
                            </div>
                            <div className="downloads-states">
                                <img src="/assets/icon-review.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Price</p>
                                <p className="download-detail-num">${appToShow.price}</p>
                            </div>
                        </div>
                       <Buttons text={'Try Now'}></Buttons>
                    </div>
                </div>
                <hr className="app-details-below-hr" />
                <div className="app-details-description">
                    <p className="description-heading">Description</p>
                    <p className="description-text">{appToShow.description}
                    </p>
                </div>
            </section>
        </>
    );
};

export default ToyDetails;