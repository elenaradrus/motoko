import {db} from '../firebase-config';

import COLLECTIONS from './constants';

import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where
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

    getLoggedUser = async (uid) => {
        console.log('getLoggedUser uid: ', uid);
        const allUsers = query(collection(db, COLLECTIONS.USERS), where ("uid", "==", uid));
        const querySnapshot = await getDocs(allUsers);
        let user;
        querySnapshot.forEach((doc) => {
            user = {
                id: doc.id,
                data: doc.data()
            }
        });
        console.log('users: ', user);
        return user;
    }
}

export default new UsersDataService();