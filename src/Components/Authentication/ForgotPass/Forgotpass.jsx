import { sendPasswordResetEmail } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase.init';
import Loader from '../../Loading';
import '../Login/login.css';

const Forgotpass = () => {
    const [loading, setLoading] = useState(false)
    const [savedEmail, setSavedEmail] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const foundEmail = localStorage.getItem('savedEmail')
        if (foundEmail !== undefined) {
            setSavedEmail(foundEmail)
        } else {
            return null
        }
        console.log(foundEmail)
    }, [])

    function handleForgotpass(e) {
        e.preventDefault()
        setLoading(true)
        sendPasswordResetEmail(auth, e.target.email.value)
            .then(() => {
                setLoading(false)
                Swal.fire({
                    title: 'Password Reset Email Sent',
                    text: 'Make sure to check your inbox and spam folder',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    navigate('/')
                })
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                Swal.fire({
                    title: 'Failed to send email',
                    text: err,
                    icon: 'error'
                })
            })
    }

    if (loading) {
        return <Loader></Loader>
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
                                        value={savedEmail || ''}
                                        onChange={(e) => setSavedEmail(e.target.value)}
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