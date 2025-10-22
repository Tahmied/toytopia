
const ToyCard = () => {
    return (
        <div className="product-card">
            <div className="product-image">
                <div className="badge">BESTSELLER</div>
                <button className="wishlist-btn">♥</button>
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
                    alt="Product"
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">Premium Wireless Headphones</h3>

                <div className="rating">
                    <div className="stars">★★★★★</div>
                    <span className="rating-text">4.8 (1,247)</span>
                </div>

                <div className="color-options">
                    <div className="color" style={{ background: "#2C2C2C" }}></div>
                    <div className="color" style={{ background: "#7680FE" }}></div>
                    <div className="color" style={{ background: "#E8E8E8" }}></div>
                </div>

                <div className="price">
                    <span className="current-price">$299.99</span>
                    <span className="original-price">$399.99</span>
                    <span className="discount">25% OFF</span>
                </div>

                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>

    );
};

export default ToyCard;