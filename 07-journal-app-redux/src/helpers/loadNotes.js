import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadNotes = async(uid = '') => {
    if (!uid) throw new Error(`The user with the uid: ${uid}, do not exist.`)

    const CollectionReference = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(CollectionReference);

    const notes = [];
    docs.forEach(doc=>{
        notes.push({id: doc.id, ...doc.data() });
    });
    return notes;
}
