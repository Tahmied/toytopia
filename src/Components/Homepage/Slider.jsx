import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import VideoSection from "../Video";
const SliderSection = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000
    };
    return (

        <>
            <section className="slider-section">
                <div className="section-header">
                    <h2 className="section-title">Playtime Highlights</h2>
                    <p className="section-subtitle video-title">Watch kids laugh, learn, and play!</p>
                </div>

                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <VideoSection thumbnail={'/assets/video-thumbnail-3.jpg'} id={'y5brOY8JxWU'}></VideoSection>
                        </div>
                        <div>
                            <VideoSection thumbnail={'/assets/video-thumbnail-1.jpg'} id={'ducLiWY7l4Q'}></VideoSection>
                        </div>
                        <div>
                            <VideoSection thumbnail={'/assets/video-thumbnail-2.jpg'} id={'hFDL5FFHAuc'}></VideoSection>
                        </div>
                    </Slider>
                </div>
            </section>




        </>
    );
};

export default SliderSection;