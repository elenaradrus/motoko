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
    where,
} from 'firebase/firestore';

const daysCollectionRef = collection(db, COLLECTIONS.DAYS);

class DaysDataService {
    addDay = async (day) => {
        const docRef = await addDoc(daysCollectionRef, day);

        return docRef.id;
    }

    updateDay = (id, day) => {
        const dayDoc = doc(db, COLLECTIONS.DAYS, id);
        return updateDoc(dayDoc, day);
    }

    deleteDay = ( id ) => {
        const dayDoc = doc(db, COLLECTIONS.DAYS, id);
        return deleteDoc(dayDoc);
    }

    getDay = async( date ) => {

        console.log('day');
        // const dayDoc = doc(db, COLLECTIONS.DAYS, id);
         const data = query(daysCollectionRef, where("date", "==", "15-5-22"));

        const querySnapshot = await getDocs(data);
        console.log('🚀 TLC ~ file: days.js ~ line 43 ~ DaysDataService ~ getDay=async ~ querySnapshot', querySnapshot)

        return querySnapshot;
    }
}

export default new DaysDataService();