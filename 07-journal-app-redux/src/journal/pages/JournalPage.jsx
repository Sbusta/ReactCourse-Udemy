import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSlectedView } from "../views"
import { startNewNote } from "../../store"

export const JournalPage = () => {

  const {isSaving, active} = useSelector(state => state.journal );
 const isActiveNote = useMemo(() => isSaving, [isSaving]);


  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote() );
  }

  return (
    <JournalLayout className='animate__animated animate__fadeIn animate__faster'>
        {/* <Typography>TEXTO</Typography> */}
        {
          (!!active) ?
          <NoteView /> 
          :
          <NothingSlectedView/>
        }

        <IconButton
        disabled={isActiveNote}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { 
            backgroundColor: 'error.main',
            opacity: 0.9 
          },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        >
          <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>

    </JournalLayout>
  )
}
