import Buttons from "../Buttons";

const CreativeTwo = () => {
    return (
        <section className="creative-two">
            <div className="creative-two-container">
                <div className="creative-left">
                    <p className="creative-title">Quality Toys for Happy Kids</p>
                    <p className="creative-desc">Discover a world of fun, colorful toys that spark creativity and joy. Perfect for endless hours of imaginative play.</p>
                    <Buttons link={'toys'} text={'Buy Now'}></Buttons>
                </div>
                <div className="creative-right">
                    <img src="/assets/creative-left.png" alt="" className="creative-right-img" />
                </div>
            </div>
        </section>
    );
};

export default CreativeTwo;