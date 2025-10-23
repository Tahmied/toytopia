import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.jsx ';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


    const login = (userData) => {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
        setIsLoggedIn(true)
    }

    const logOut = () => {
        setUser(null)
        localStorage.removeItem('user')
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ user, login, logOut, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;