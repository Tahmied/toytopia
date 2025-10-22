import { useLoaderData } from "react-router";
import Buttons from "../Buttons";
import Toycard from "./Toycard";

const PopularToys = () => {
    const toys = useLoaderData()
    return (
        <section className="popular-toys popular-toys-sec">
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
                <div className="view-more-container popular-view-more">
                    <Buttons text={`View All Toys`}></Buttons>
                </div>
            </div>
        </section>
    );
};

export default PopularToys;