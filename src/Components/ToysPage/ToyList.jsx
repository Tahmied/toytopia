import { useLoaderData } from "react-router";
import Toycard from "../Homepage/Toycard";

const ToyList = () => {
    const toys = useLoaderData()
    return (
        <section className="popular-toys popular-toys-sec all-toys-sec">
            <div className="container">
                <h2 className="section-title">All Toys</h2>
                <div className="toys-grid">
                    {
                        toys.map(toy => {
                            return <Toycard path={toy.toyId} key={toy.toyId} name={`${toy.toyName}`} price={toy.price} rating={toy.rating} stock={toy.availableQuantity} img={toy.pictureURL} desc={toy.description}></Toycard>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ToyList;