
const Toycard = ({ name, rating, stock, price, img, link }) => {
    return (
        <div className="toy-card">
            <div className="toy-image">
                <img src={img} />
            </div>

            <div className="toy-content">
                <div className="toy-header">
                    <h3 className="toy-name">{name}</h3>
                    <div className="toy-price">${price}</div>
                </div>

                <div className="toy-meta">
                    <div className="rating-badge">
                        <span className="rating-value">{rating}</span>
                        <span className="rating-max">/5</span>
                    </div>
                    <div className="stock-info">
                        <span className="stock-indicator"></span>
                        <span>{stock} in stock</span>
                    </div>
                </div>

                <div className="toy-actions">
                    <button className="btn-view">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Toycard;