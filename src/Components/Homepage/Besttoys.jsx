import Aos from "aos";
import { useEffect } from "react";
import Buttons from "../Buttons";

const Besttoys = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className="best-toys-slide">
            <div className="best-toys-container">
                <div className="slide-two-left">

                    <div data-aos-offset='400' data-aos="flip-left" data-aos-duration='1200' className="slide-two-toy-img-container"><img src="/assets/zeep.png" alt="" className="slide-toy-item" /></div>

                    <div data-aos-offset='400' data-aos="flip-right" data-aos-duration='1200' className="slide-two-toy-img-container"><img src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/Puzzle_Game_Rubiks_Cube_1Pieces-Non_Brand-7f93a-411106.png" alt="" className="slide-toy-item" /></div>

                    <div data-aos-offset='400' data-aos='flip-up' data-aos-duration='1200' className="slide-two-toy-img-container"><img src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/8pcs_Floating_Duck_Bath_Toys_with_Squeez-Non_Brand-e1b5c-411119.png" alt="" className="slide-toy-item" /></div>

                    <div data-aos-offset='400' data-aos='flip-down' data-aos-duration='1200' className="slide-two-toy-img-container"><img src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/Baby_Plastic_Soothing_Rattle_Toy_for_New-Non_Brand-c6fbb-453120.png" alt="" className="slide-toy-item" /></div>
                </div>
                <div className="slide-two-right">
                    <p className="slide-two-title">Our Best And Popular Selling Toys</p>
                    <div className="slide-two-states">
                        <div className="slide-two-state-item">
                            <p className="slide-two-state-num">2.4K</p>
                            Toys Sell
                        </div>
                        <div className="slide-two-state-item">
                            <p className="slide-two-state-num">45K</p>
                            Website Visitors
                        </div>

                    </div>
                    <Buttons link={'toys'} text={`View Our Toys`}></Buttons>
                </div>
            </div>

        </div>
    );
};

export default Besttoys;