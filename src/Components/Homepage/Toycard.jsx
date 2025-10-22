
const Toycard = ({ name, rating, stock, price, link }) => {
    return (
        <div class="toy-card">
            <div class="toy-image">
                <img src="https://rokbucket.rokomari.io/ProductNew20190903/260X372/Puzzle_Game_Rubiks_Cube_1Pieces-Non_Brand-7f93a-411106.png" alt="Creative Building Blocks" />
            </div>

            <div class="toy-content">
                <div class="toy-header">
                    <h3 class="toy-name">{name}</h3>
                    <div class="toy-price">${price}</div>
                </div>

                <div class="toy-meta">
                    <div class="rating-badge">
                        <span class="rating-value">{rating}</span>
                        <span class="rating-max">/5</span>
                    </div>
                    <div class="stock-info">
                        <span class="stock-indicator"></span>
                        <span>{stock} in stock</span>
                    </div>
                </div>

                <div class="toy-actions">
                    <button class="btn-view">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Toycard;