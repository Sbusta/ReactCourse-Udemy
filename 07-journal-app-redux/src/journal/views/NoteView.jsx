import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks"
import { setActiveNote, startDeleltingNote, startSaveNote, startUploadingFiles } from "../../store"

export const NoteView = () => {

    const dispatch = useDispatch();
    const {active: activeNote, messageSaved, isSaving } = useSelector( state => state.journal)

    const {body, title, date, onInputChange, formState} = useForm(activeNote)

    const dateString = useMemo(()=>{
        const thisDate = new Date(date);
        return thisDate.toUTCString();
    },[date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))      
    }, [formState])

    useEffect(() => {
            if(messageSaved.length > 0 ){
                Swal.fire('Note Updated', messageSaved, 'success');
            }
    }, [messageSaved])
    
    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange =({target}) => {
        if (target.files === 0)return;

        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeleltingNote());
    }

  return (
    <Grid container
        className='animate__animated animate__fadeIn animate__faster'
        direction='row'
        justifyContent='space-between'
        sx={{ mb:1 }}
    >
        <Typography 
            fontSize={39} 
            fontWeight='light'
        >
            {dateString}
        </Typography>
        <Grid item>
            <input 
                type="file" 
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{display:'none'}} 
             />

             <IconButton
                color="primary"
                disabled={ isSaving }
                onClick={ () => fileInputRef.current.click() }
             >
                <UploadOutlined/>
             </IconButton>
            <Button 
                disabled={isSaving}
                onClick={onSaveNote}
                color="primary"
                sx={{
                    padding: 2
                }}
            >
                <SaveOutlined 
                    sx={{
                        fontSize: 30,
                        mr: 1
                    }}
                />
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Type your Title"
                label='Title'
                sx={{
                    border: 'none', mb:1
                }}
                name="title"
                value={title}
                onChange={onInputChange}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What happened today?"
                minRows={5}
                name="body"
                value={body}
                onChange={onInputChange}
            />
        </Grid>
        <Grid container
            justifyContent="end"
        >
            <Button
                onClick={onDelete}
                sx={{mt:2}}
                color="error"
            >
                <DeleteOutline/>
                Delete
            </Button>

        </Grid>
        {/* img */}
        <ImageGallery 
            images ={activeNote.imageUrls}
        />
    </Grid>
  )
}
