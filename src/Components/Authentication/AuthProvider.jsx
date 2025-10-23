import { useState } from 'react';
import { AuthContext } from './AuthContext.jsx ';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (userData)=>{
        setUser(userData)
        localStorage.setItem(user, userData)
    }

    const logOut = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }
    
    return (
        <AuthContext.Provider value={{ user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;