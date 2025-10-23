import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "./Authentication/AuthContext.jsx";
import Buttons from "./Buttons";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
    const { user, isLoggedIn } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (isMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.classList.add('no-scroll');
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.classList.remove('no-scroll');
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    const [isDropdownActive, setisDropdownActive] = useState(false)

    function setDropdown() {
        setisDropdownActive(!isDropdownActive)
    }
    const navigate = useNavigate()
    return (
        <>
            <header>
                <div className="header-container">

                    <div onClick={() => navigate('/')} className='logo'>
                        <img src="/assets/logo.png" alt="" className="logo-icon" />
                    </div>

                    <div className='menu'>
                        <ul className="nav-list">
                            <NavLink className="nav-item" to='/'>Home</NavLink>
                            <NavLink className="nav-item" to='/toys'>All Toys</NavLink>
                            {
                                isLoggedIn ? <NavLink className="nav-item" to='/profile'>Profile</NavLink> : ''
                            }
                        </ul>
                    </div>

                    <div className="header-cta">
                        {
                            isLoggedIn ? <div className="header-actions">
                                <div onClick={() => setDropdown()} className="profile-nav">
                                    <img src={user.photoURL? user.photoURL :'/public/assets/usericon.svg'} alt="" className="profile-pic" />
                                </div>
                                {
                                    isDropdownActive ? <HeaderDropdown setisDropDownActive={setisDropdownActive} user={user}></HeaderDropdown> : ''
                                }
                            </div> : <Buttons link={'login'} text={'Login'}></Buttons>
                        }
                    </div>
                </div>
                <div className="mobile-menu">
                    <div onClick={() => navigate('/')} className='logo'>
                        <img src="/assets/logo.png" alt="" className="logo-icon" />
                    </div>

                    <div className="mobile-header-actions">
                        <div className="mobile-actions-container">
                            {
                                isLoggedIn ? <div>
                                    <div onClick={() => setDropdown()} className={`mobile-profile-nav ${isMenuOpen ? 'fade-out' : ''}`}>
                                        <img src="/assets/profile.jpg" alt="" className="profile-pic" />
                                    </div>
                                    {
                                        isDropdownActive ? <HeaderDropdown user={user}></HeaderDropdown> : ''
                                    }</div> : <Buttons link={'login'} text={'Login'}></Buttons>
                            }
                            <label onChange={toggleMenu} className="hamburger">
                                <input type="checkbox" />
                                <svg viewBox="0 0 32 32">
                                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                    <path className="line" d="M7 16 27 16"></path>
                                </svg>
                            </label>
                        </div>
                    </div>



                </div>
                <div className={`cover-whole-body ${isMenuOpen ? '' : 'hidden'}`}></div>
                <div className={`mobile-menu-ui ${isMenuOpen ? '' : 'hidden'}`}>
                    <label onChange={toggleMenu} className="mobile-hamburger hamburger">
                        <input type="checkbox" />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="mobile-line line" d="M7 16 27 16"></path>
                        </svg>
                    </label>

                    <ul className="mobile-nav-list"><NavLink className="nav-item" to='/'>Home</NavLink>
                        <NavLink className="nav-item" to='/apps'>Apps</NavLink>
                        <NavLink className="nav-item" to='/Installation'>Installation</NavLink>
                        <button onClick={() => window.open('https://www.github.com/tahmied', '_blank')} className="header-cta-btn">
                            <img src="/assets/github-logo.svg" alt="" className="header-cta-img" />
                            Contribute
                        </button>
                    </ul>
                </div>

            </header>
        </>
    );
};

export default Header;