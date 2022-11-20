import {db} from '../firebase-config';

import COLLECTIONS from './constants';

import {
    collection,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const usersCollectionRef = collection(db, COLLECTIONS.USERS);

class UsersDataService {
    addUser = (user) => {
        return addDoc(usersCollectionRef, user);
    }

    updateUser = (id, user) => {
        const userDoc = doc(db, COLLECTIONS.USERS, id);
        return updateDoc(userDoc, user);
    }

    deleteUser = ( id ) => {
        const userDoc = doc(db, COLLECTIONS.USERS, id);
        return deleteDoc(userDoc);
    }

    getUser = ( id ) => {
        const userDoc = doc(db, COLLECTIONS.USERS, id);
        return getDoc(userDoc);
    }
}

export default new UsersDataService();