import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase.init';
import { AuthContext } from '../AuthContext.jsx ';
import './login.css';

const googleAuthProvider = new GoogleAuthProvider()


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { user, login } = useContext(AuthContext)
    console.log(user)

    function handleGoogleLogin() {
        signInWithPopup(auth, googleAuthProvider)
            .then((res) => {
                login(res.user)
                Swal.fire({
                    title: 'Login Successfull',
                    text: 'You have been logged in properly',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(user)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="login">
            <div className="login-container">
                <div className="login-left">
                    <h1 className="welcome-text">Let the Fun Begin!</h1>
                    <p className="subtitle">
                        Log in to explore a world full of toys, games, and endless fun!

                    </p>
                    <ul className="features">
                        <li><i className="fas fa-check-circle"></i> Magical toy collections</li>
                        <li><i className="fas fa-check-circle"></i> Exclusive deals just for you</li>
                        <li><i className="fas fa-check-circle"></i> Friendly support whenever you need it</li>
                    </ul>
                </div>

                <div className="login-right">
                    <div className="login-header">
                        <h2 className="login-title">Sign In</h2>
                        <p className="login-subtitle">Enter your credentials to access your account</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <div className="input-with-icon">
                                <i className="fas fa-envelope input-icon"></i>
                                <input
                                    name='email'
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="name@email.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <div className="input-with-icon">
                                <i className="fas fa-lock input-icon"></i>
                                <input
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-control"
                                    placeholder="••••••••"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i
                                    className={showPassword ? 'fas fa-eye-slash password-toggle' : 'fas fa-eye password-toggle'}
                                    onClick={handleTogglePassword}
                                ></i>
                            </div>
                        </div>

                        <div className="form-options">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>

                        <button type="submit" className="login-button">Sign In</button>

                        <div className="divider"><span>Or continue with</span></div>

                        <div className="social-login">
                            <button onClick={handleGoogleLogin} type="button" className="social-button">
                                <i className="fab fa-google"></i> Google
                            </button>
                        </div>

                        <div className="signup-link">
                            Don't have an account? <a href="/register">Sign up here</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Login;