import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase.init';
import { AuthContext } from '../AuthContext.jsx ';
import './registration.css';

const googleAuthProvider = new GoogleAuthProvider()


const Registration = () => {

    const { user, login } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        terms: false
    });

    const [showPassword, setShowPassword] = useState(false);

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

        if (!formData.terms) {
            alert('Please agree to the Terms of Service and Privacy Policy');
            return;
        }
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((res) => {
                updateProfile(res.user, {
                    displayName: formData.fullName
                })
                login(res.user)
                Swal.fire({
                    title: 'Registration Successfull',
                    text: 'Your account has been registered!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            })
    };


    function handleGoogleLogin() {
        signInWithPopup(auth, googleAuthProvider)
            .then((res) => {
                login(res.user)
                Swal.fire({
                    title: 'Registration Successfull',
                    text: 'Your account has been registered!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(user)
    }

    return (
        <section className="registration-sec">
            <div className="register-container">
                <div className="register-left">
                    <div className="brand">
                        <div className="brand-icon">P</div>
                        <div className="brand-name">Premium</div>
                    </div>
                    <h1 className="welcome-text">Join Our Community</h1>
                    <p className="subtitle">
                        Create your premium account and unlock exclusive features designed to enhance your experience.
                    </p>
                    <ul className="features">
                        <li><i className="fas fa-check-circle"></i> Access to premium features</li>
                        <li><i className="fas fa-check-circle"></i> Personalized dashboard</li>
                        <li><i className="fas fa-check-circle"></i> 24/7 priority support</li>
                        <li><i className="fas fa-check-circle"></i> Advanced security options</li>
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
                                    placeholder="John Doe"
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
                                    placeholder="name@company.com"
                                    value={formData.email}
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

    );
};

export default Registration;