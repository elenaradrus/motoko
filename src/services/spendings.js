import { db } from '../firebase-config';
import COLLECTIONS from './constants';

import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc,
    query,
    where
} from 'firebase/firestore';
import { async } from '@firebase/util';

const spendingsCollectionRef = collection(db, COLLECTIONS.SPENDINGS);

class SpendingsDataService {
    addDoc = async (date, category, description, amount) => {
        await setDoc(doc(spendingsCollectionRef), {
            date,
            category,
            description,
            amount
        });
    }
    addNewSpending = async (spending) => {
        const docRef = await addDoc(collection(db, COLLECTIONS.USERS, '0Q3vYur5KRbEmzefNAot', COLLECTIONS.SPENDINGS), spending);
        return docRef;
    }
    getSpendings = async () => {
        const querySnapshot = await getDocs(collection(db, COLLECTIONS.USERS, '0Q3vYur5KRbEmzefNAot', COLLECTIONS.SPENDINGS));
        return querySnapshot;
    }
}

export default new SpendingsDataService();