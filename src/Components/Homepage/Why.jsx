
const Why = () => {
    return (
        <section className="features">
            <div className="container why-container">
                <h2 className="section-title">Why ToyTopia?</h2>
                <div className="features-grid">

                    <div className="feature-card">
                        <div className="feature-icon icon-local">
                            <i className="fas fa-store"></i>
                        </div>
                        <h3 className="feature-title">Local Sellers</h3>
                        <p className="feature-text">Support small businesses and local artisans in your community while finding
                            unique toys for your children.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-safe">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3 className="feature-title">Kid-Safe Toys</h3>
                        <p className="feature-text">All toys are carefully vetted for safety and quality, ensuring they meet the
                            highest standards for children.</p>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon icon-support">
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3 className="feature-title">Fast Support</h3>
                        <p className="feature-text">Our dedicated support team is here to help with any questions or concerns
                            you may have about your purchases.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;