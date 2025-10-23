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
                        toys.slice(0,6).map(toy => {
                            return <Toycard key={toy.toyId}  name={`${toy.toyName}`} price={toy.price} rating={toy.rating} stock={toy.availableQuantity} img={toy.pictureURL}></Toycard>
                        })
                    }
                </div>
                <div className="view-more-container popular-view-more">
                    <Buttons text={`View All Toys`} link={'toys'}></Buttons>
                </div>
            </div>
        </section>
    );
};

export default PopularToys;