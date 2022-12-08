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
    setDoc,
    query,
    where
} from 'firebase/firestore';
import { async } from '@firebase/util';

const spendingsCollectionRef = collection(db, COLLECTIONS.SPENDINGS);

class SpendingsDataService {
    addDoc = async (date, category, description, amount ) => {
        // console.log("clg service date", date)
        // console.log("clg service category", category)
        // console.log("clg service description", description)
        // console.log("clg service amount", amount)
        await setDoc(doc(spendingsCollectionRef), {
            date,
            category,
            description,
            amount
        });
    }

}

export default new SpendingsDataService();