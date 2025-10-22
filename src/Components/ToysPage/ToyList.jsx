import { useLoaderData } from "react-router";
import Toycard from "../Homepage/Toycard";

const ToyList = () => {
    const toys = useLoaderData()
    return (
        <section className="popular-toys popular-toys-sec all-toys-sec">
            <div className="container">
                <h2 className="section-title">Popular Toys</h2>
                <div className="toys-grid">
                    {
                        toys.map(toy => {
                            console.log(toy)
                            return <Toycard key={toy.toyId} name={`${toy.toyName}`} price={toy.price} rating={toy.rating} stock={toy.availableQuantity} img={toy.pictureURL}></Toycard>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ToyList;