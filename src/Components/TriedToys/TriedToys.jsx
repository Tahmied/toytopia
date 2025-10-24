import { Helmet } from "react-helmet";
import Toycard from "../Homepage/Toycard";
import NoToys from "./NoToys";

const TriedToys = () => {
    const triedToys = JSON.parse(localStorage.getItem('tryingToys')) || []

    if (triedToys.length < 1) {
        return <NoToys></NoToys>
    }

    return (
        <>
            <Helmet>
                <title>Tried Toys | ToyTopia</title>
            </Helmet>
            <section className="popular-toys popular-toys-sec all-toys-sec">
                <div className="container">
                    <h2 className="section-title">Tried Toys</h2>
                    <div className="toys-grid">
                        {
                            triedToys.map(toy => {
                                return <Toycard path={toy.toyId} key={toy.toyId} name={`${toy.toyName}`} price={toy.price} rating={toy.rating} stock={toy.availableQuantity} img={toy.pictureURL}></Toycard>
                            })
                        }
                    </div>
                </div>
            </section>
        </>

    );
};

export default TriedToys;