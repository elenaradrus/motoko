import {createContext, useEffect, useContext, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {auth} from '../firebase-config';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState();

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    return(
        <userAuthContext.Provider>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}