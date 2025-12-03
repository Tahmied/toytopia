import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router";

const Toycard = ({ name, rating, price, img, path, desc }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    
    return (
        <div data-aos-offset="500" data-aos-duration='1200' data-aos="fade-up" className="toy-card-minimal">
            <div className="toy-image-minimal">
                <img src={img} alt={name} />
                <div className="toy-price-badge">${price}</div>
            </div>
            
            <div className="toy-content-minimal">
                <h3 className="toy-name-minimal">{name}</h3>
                
                <p className="toy-desc-minimal">{desc}</p>
                
                <div className="toy-footer-minimal">
                    <div className="rating-minimal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="rating-text-minimal">{rating}</span>
                    </div>
                    
                    <div className="stock-minimal">
                        <span className="stock-dot-minimal"></span>
                        <span className="stock-text-minimal">In Stock</span>
                    </div>
                </div>
                
                <Link to={`/toy/${path}`} className="btn-view-minimal">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Toycard;