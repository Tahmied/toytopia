import Buttons from "../Buttons";

const CreativeTwo = () => {
    return (
        <>
            <section className="creative-two">
                <div className="creative-two-container">
                    <div className="creative-left">
                        <p data-aos-offset="500" data-aos-duration='1200' data-aos="fade-up" className="creative-title">Quality Toys for Happy Kids</p>
                        <p data-aos-offset="500" data-aos-duration='1200' data-aos="fade-up" className="creative-desc">Discover a world of fun, colorful toys that spark creativity and joy. Perfect for endless hours of imaginative play.</p>
                        <Buttons link={'toys'} text={'Buy Now'}></Buttons>
                    </div>
                    <div data-aos-offset="500" data-aos="zoom-in" className="creative-right">
                        <img src="/assets/creative-left.png" alt="" className="creative-right-img" />
                    </div>
                </div>
            </section>

            <section className="aboutpage-cta-section h-[50vh] flex flex-col justify-center items-center !bg-[#ffffffb9] !mx-auto w-[80%] !mb-8">
                <h2>Ready to Explore?</h2>
                <p>Browse our collection and find the perfect toy for your little ones today.</p>
                <button className="aboutpage-cta-button">Shop Now</button>
            </section>
        </>

    );
};

export default CreativeTwo;