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

const incomeCollectionRef = collection(db, COLLECTIONS.INCOME);

class IncomeDataService {
    addDoc = async (date, name, amount) => {
        await setDoc(doc(incomeCollectionRef), {
            date,
            name,
            amount
        });
    }
    addNewIncome = async (income) => {
        const docRef = await addDoc(collection(db, COLLECTIONS.USERS, '0Q3vYur5KRbEmzefNAot', COLLECTIONS.INCOME), income);
        return docRef;
    }

}

export default new IncomeDataService();