import Aos from "aos";
import { useEffect } from "react";
import Buttons from "../Buttons";

const Hero = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <p data-aos-duration='1200' data-aos="fade-down" className="hero-big-text">Find Your Best Toys For Your Kids</p>
                    <p data-aos-duration='1300' data-aos="fade-down" className="hero-description">We deliver best of fantastic hand picked age appropriate toys books and puzzles straight to your door.</p>
                    <Buttons link={'toys'} text={`View Our Toys`}></Buttons>
                </div>
                <div className="hero-right">
                    <img data-aos-duration='1200' data-aos="fade-left" src="/assets/hero-image.png" alt="" className="hero-right" />
                </div>
            </div>
        </section>
    );
};

export default Hero;