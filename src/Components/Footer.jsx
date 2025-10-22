
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="footer-logo">
                                <a href="#" className="logo">
                                    <i className="fas fa-robot"></i>
                                    ToyTopia
                                </a>
                                <p className="footer-description">
                                    Bringing joy and creativity to children worldwide with our premium collection of educational and fun toys.
                                </p>
                                <div className="social-links">
                                    <a href="#" className="social-link">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="#">All Toys</a></li>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Best Sellers</a></li>
                                <li><a href="#">On Sale</a></li>
                                <li><a href="#">Educational Toys</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3 className="footer-title">Categories</h3>
                            <ul className="footer-links">
                                <li><a href="#">Building Blocks</a></li>
                                <li><a href="#">Puzzles</a></li>
                                <li><a href="#">Art & Craft</a></li>
                                <li><a href="#">STEM Toys</a></li>
                                <li><a href="#">Outdoor Play</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3 className="footer-title">Support</h3>
                            <ul className="footer-links">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Shipping Info</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Size Guide</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3 className="footer-title">Contact Info</h3>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>123 Play Street, Toy City, TC 12345</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span>+1 (555) 123-TOYS</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <span>hello@toyland.com</span>
                                </div>
                            </div>
                            <div className="newsletter">
                                <h4>Stay Updated</h4>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="Your email address" />
                                    <button className="btn-subscribe">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <p>&copy; 2024 ToyLand. All rights reserved.</p>
                            <div className="footer-bottom-links">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;