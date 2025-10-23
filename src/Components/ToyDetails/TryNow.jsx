import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import './trynowstyles.css';

const TryNow = ({ setIsTrying, toyToTry }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentTryingToys = JSON.parse(localStorage.getItem('tryingToys')) || [];
        const alreadyExists = currentTryingToys.some(toy => toy.toyId === toyToTry.toyId);
        if (!alreadyExists) {
            const updatedTryingToys = [...currentTryingToys, toyToTry];
            localStorage.setItem('tryingToys', JSON.stringify(updatedTryingToys));
        }
        Swal.fire({
            icon:'success',
            showCancelButton: false,
            timer: 1000
        }).then(()=>{
            navigate('/tried-toys')
        })
    };

    return (
        <>
            <div className="try-now-cover"></div>
            <div className="try-now-section">
                <div className="try-now-card">
                    <div className="try-now-card-container">
                        <div onClick={() => setIsTrying(false)} className="trynow-close-btn">
                            <img src="/assets/cross-btn-trynow.svg" alt="" />
                        </div>
                        <div className="try-now-header">
                            <h2>Try Now</h2>
                            <p>Get started with your free trial</p>
                        </div>

                        <form className="try-now-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <button type="submit" className="try-now-btn">
                                Get Started Now
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default TryNow;