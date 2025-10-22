import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const hamburgerRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleMenu = () => {
        setMenuActive((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    useEffect(() => {
        document.body.style.overflow = menuActive ? "hidden" : "";

        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current &&
                hamburgerRef.current &&
                !event.target.closest(".navbar")
            ) {
                closeMenu();
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        document.addEventListener("click", handleClickOutside);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [menuActive]);

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
                        {
                            isLoggedIn ? <div className="avatar">JS</div> : <a href="#" className="btn btn-playful">Login</a>
                        }

                    </div>
                </div>

                <div className="mobile-header-right">
                    {
                        isLoggedIn ? <div className="avatar mobile-avatar">JS</div> : <a href="#" className="mobile-login-btn btn btn-playful">Login</a>
                    }

                    <button
                        className={`hamburger ${menuActive ? "active" : ""}`}
                        id="hamburger"
                        ref={hamburgerRef}
                        onClick={toggleMenu}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            <div
                className={`mobile-menu ${menuActive ? "active" : ""}`}
                id="mobileMenu"
                ref={mobileMenuRef}
            >
                <ul className="mobile-nav-links">
                    <li><a href="#" onClick={closeMenu}>Home</a></li>
                    <li><a href="#" onClick={closeMenu}>Toys</a></li>
                    <li><a href="#" onClick={closeMenu}>Sellers</a></li>
                    <li><a href="#" onClick={closeMenu}>My Profile</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
