import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUsers = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider)
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubprovider)
    }

    const updateUserProfile = (name,image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }



    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            console.log('observarbing ', currentuser)
            setLoading(false);
        })
        return () => {
            unSubscriber()
        }
    }, [])

    const authinfo = {
        user,
        loading,
        creatUser,
        signInUsers,
        signOutUser,
        googleLogin,
        githubLogin,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}