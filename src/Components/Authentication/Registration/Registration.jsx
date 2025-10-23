import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase.init';
import Loader from '../../Loading.jsx';
import { AuthContext } from '../AuthContext.jsx';
import './registration.css';

const googleAuthProvider = new GoogleAuthProvider()

const Registration = () => {

    const { login } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        terms: false,
        photoURL: ''
    });

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (!formData.terms) {
            Swal.fire({
                title: 'Terms and Conditions',
                text: 'You must accept our terms and conditions before signing up for our service',
                icon: 'warning',
                showConfirmButton: true,
            })
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(formData.password)) {
            setLoading(false);
            Swal.fire({
                title: 'Weak Password',
                text: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long.',
                icon: 'warning',
                showConfirmButton: true,
            });
            return;
        }

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((res) => {
                updateProfile(res.user, {
                    displayName: formData.fullName,
                    photoURL: formData.photoURL
                })
                login(res.user)
                setLoading(false)
                Swal.fire({
                    title: 'Registration Successfull',
                    text: 'Your account has been registered successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    navigate('/')
                })
            })
            .catch((err) => {
                setLoading(false)
                Swal.fire({
                    title: 'Registration Failed',
                    text: err,
                    icon: 'error',
                    showConfirmButton: 'false'
                });
            })
    };


    function handleGoogleLogin() {
        setLoading(true)
        signInWithPopup(auth, googleAuthProvider)
            .then((res) => {
                login(res.user)
                setLoading(false)
                Swal.fire({
                    title: 'Registration Successfull',
                    text: 'Your account has been registered successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    navigate('/')
                })
            })
            .catch((err) => {
                setLoading(false)
                Swal.fire({
                    title: 'Registration Failed',
                    text: err,
                    icon: 'error',
                    showConfirmButton: 'false'
                });
            })
    }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <>
            <Helmet>
                <title>Create Account | ToyTopia</title>
            </Helmet>
            <section className="registration-sec">
                <div className="register-container">
                    <div className="register-left">
                        <h1 className="welcome-text">Let the Fun Begin!</h1>
                        <p className="subtitle">
                            Register to explore a world full of toys, games, and endless fun!

                        </p>
                        <ul className="features">
                            <li><i className="fas fa-check-circle"></i> Magical toy collections</li>
                            <li><i className="fas fa-check-circle"></i> Exclusive deals just for you</li>
                            <li><i className="fas fa-check-circle"></i> Friendly support whenever you need it</li>
                        </ul>
                    </div>

                    <div className="register-right">
                        <div className="register-header">
                            <h2 className="register-title">Create Account</h2>
                            <p className="register-subtitle">Fill in your details to get started</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="fullName">
                                    Full Name
                                </label>
                                <div className="input-with-icon">
                                    <i className="fas fa-user input-icon"></i>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="form-control"
                                        placeholder="Name here"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="input-with-icon">
                                    <i className="fas fa-envelope input-icon"></i>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="name@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="form-label" htmlFor="photoURL">
                                    Photo URL
                                </label>
                                <div className="input-with-icon">
                                    <i className="fas fa-envelope input-icon"></i>
                                    <input
                                        type="text"
                                        id="photoURL"
                                        name="photoURL"
                                        className="form-control"
                                        placeholder="yourphotourl.com"
                                        value={formData.photoURL}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <div className="input-with-icon">
                                    <i className="fas fa-lock input-icon"></i>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <i
                                        className={`fas fa-eye${showPassword ? '-slash' : ''} password-toggle`}
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                            </div>

                            <div className="terms">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="terms">
                                    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                                </label>
                            </div>

                            <button type="submit" className="register-button">
                                Create Account
                            </button>

                            <div className="divider">
                                <span>Or sign up with</span>
                            </div>

                            <div className="social-register">
                                <button
                                    type="button"
                                    className="social-button"
                                    onClick={handleGoogleLogin}
                                >
                                    <i className="fab fa-google"></i> Google
                                </button>

                            </div>

                            <div className="login-link">
                                Already have an account? <Link to="/login">Sign in here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>


    );
};

export default Registration;