
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We provide the best toys for children of all ages, focusing on safety, education, and fun. Our mission is to bring joy to families everywhere.</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Sales & Deals</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns & Exchanges</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 ToyStore. All rights reserved by Tahmied.</p>
                    <div className="payment-methods">
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-paypal"></i>
                        <i className="fab fa-cc-apple-pay"></i>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;