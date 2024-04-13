import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    
    const creatUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUsers=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            console.log('observarbing ', currentuser)
        })
        return () => {
            unSubscriber()
        }
    }, [])

    const authinfo={
        user ,
        creatUser ,
        signInUsers,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}