import {db} from '../firebase-config';

import COLLECTIONS from './constants';

import {
    collection,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
    where,
    query,
} from 'firebase/firestore';

const exerciseCollectionRef = collection(db, COLLECTIONS.EXERCISES);

class ExerciseDataService {
    addExercise = async (exercise) => {
        const docRef = await addDoc(exerciseCollectionRef, exercise);

        return docRef.id;
    }

    updateExercise = (id, exercise) => {
        const exerciseDoc = doc(db, COLLECTIONS.EXERCISES, id);
        return updateDoc(exerciseDoc, exercise);
    }

    deleteExercise = ( id ) => {
        const exerciseDoc = doc(db, COLLECTIONS.EXERCISES, id);
        return deleteDoc(exerciseDoc);
    }

    getExercise = async ( id ) => {

        console.log('day');
        // const dayDoc = doc(db, COLLECTIONS.DAYS, id);
         const data = query(exerciseCollectionRef, where("date", "==", "8-5-22"));

        const querySnapshot = await getDocs(data);
        console.log('🚀 TLC ~ file: days.js ~ line 43 ~ DaysDataService ~ getDay=async ~ querySnapshot', querySnapshot)
        
        const result = querySnapshot.forEach((doc) => {
            console.log('doc: ', doc.data());
            return doc.data();
        });

        console.log('result: ', result);

        return result ? result : null;
        // return getDoc(dayDoc);
        // const exerciseDoc = doc(db, COLLECTIONS.EXERCISES, id);
        // return getDoc(exerciseDoc);
    }
}

export default new ExerciseDataService();