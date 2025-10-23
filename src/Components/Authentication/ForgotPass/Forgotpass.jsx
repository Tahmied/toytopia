import { Link } from 'react-router';
import '../Login/login.css';

const Forgotpass = () => {
    
    function handleForgotpass(e) {
        console.log(e.target)
    }

    return (
        <>
            <section className="login">
                <div className="login-container">
                    <div className="login-left">
                        <h1 className="welcome-text">Forgot Your Password?</h1>
                        <p className="subtitle">
                            Don’t worry! Enter your email below, and we’ll send you instructions to reset your password.
                        </p>
                        <ul className="tips">
                            <li><i className="fas fa-envelope"></i> Make sure to check your inbox and spam folder</li>
                            <li><i className="fas fa-clock"></i> The reset link will expire in 30 minutes</li>
                            <li><i className="fas fa-lock"></i> Choose a strong new password for security</li>
                        </ul>
                    </div>

                    <div className="login-right">
                        <div className="login-header">
                            <h2 className="login-title">Reset Your Password</h2>
                            <p className="login-subtitle">Enter your email address below, and we'll send you a link to reset your password.</p>
                        </div>

                        <form onSubmit={handleForgotpass}>
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
                                    />
                                </div>
                            </div>

                            <div className="form-options">
                                <Link to={'/login'} className="forgot-password">Want to Login?</Link>
                            </div>

                            <button type="submit" className="login-button">Reset Password</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Forgotpass;