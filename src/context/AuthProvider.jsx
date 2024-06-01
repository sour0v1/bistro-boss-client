import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create user by google
    const createUserByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // log in user
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data);
                        localStorage.setItem('access-token', res.data.token)
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
            else {
                console.log('logged out')
                localStorage.removeItem('access-token');
            }
            setLoading(false);

        })
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    // logout user
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOut,
        createUserByGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;