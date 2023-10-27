import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async(dispatch, getState)=>{
    
        dispatch(savingNewNote() );


        console.log('Journal Slice');
        const { uid  } = getState().auth;

        const newNote ={
            title:'',
            body:'',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc,newNote);
        
        newNote.id = newNote.id

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) =>{
        const { uid } = getState().auth;
        if (!uid) throw new Error(`The user with the uid: ${uid}, do not exist.`)

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async(dispatch, getState)=>{

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active:activeNote } = getState().journal;

        const noteToFireSotre ={...activeNote};
        delete noteToFireSotre.id

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await setDoc(docRef, noteToFireSotre, {merge:true})

        dispatch(updateNote(activeNote))
    }
}
export const startUploadingFiles = (files = []) => {
 return async(dispatch)=>{
    dispatch(setSaving() );
    //await fileUpload(files[0]);

    const fileUploadPromises = [];

    for (const file of files) {
        fileUploadPromises.push(fileUpload(file))
    }
    const photosUrls = await Promise.all(fileUploadPromises);

    dispatch(setPhotosToActiveNote(photosUrls));

    }
}

export const startDeleltingNote = () =>{
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const { active: activeNote } = getState().journal

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(activeNote.id));
    }
}