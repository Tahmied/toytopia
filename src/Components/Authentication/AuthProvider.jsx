import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../Firebase.init';
import Loader from '../Loading';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
            setLoading(false);
        });

        return () => unsubscribe()
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logOut = () => {
        setUser(null);
        auth.signOut(); 
    };

    if (loading) return <Loader></Loader>

    return (
        <AuthContext.Provider value={{ user, login, logOut, isLoggedIn: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
