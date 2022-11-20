import {auth} from '../firebase-config';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendSignInLinkToEmail,
} from 'firebase/auth';

class AuthDataService {

    signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
}

export default new AuthDataService();