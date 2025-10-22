
const Header = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="logo">
                    <i className="fas fa-robot"></i>
                    ToyTopia
                </a>

                <div className="nav-container">
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Toys</a></li>
                        <li><a href="#">Sellers</a></li>
                        <li><a href="#">My Profile</a></li>
                    </ul>

                    <div className="user-actions">
                        <a href="#" className="btn btn-playful">Login</a>
                        <div className="avatar">JS</div>
                    </div>
                </div>

                <div className="mobile-header-right">
                    <a href="#" className="mobile-login-btn btn btn-playful">Login</a>
                    <div className="avatar mobile-avatar">JS</div>
                    <button className="hamburger" id="hamburger">
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>
            
            <div className="mobile-menu" id="mobileMenu">
                <ul className="mobile-nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Toys</a></li>
                    <li><a href="#">Sellers</a></li>
                    <li><a href="#">My Profile</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;