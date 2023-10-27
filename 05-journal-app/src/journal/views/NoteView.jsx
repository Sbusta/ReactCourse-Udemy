import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid container
        direction='row'
        justifyContent='space-between'
        sx={{ mb:1 }}
    >
        <Typography 
            fontSize={39} 
            fontWeight='light'
        >
            November 25, 2023
        </Typography>
        <Grid item>
            <Button 
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
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What happened today?"
                minRows={5}
            />
        </Grid>
        {/* img */}
        <ImageGallery />
    </Grid>
  )
}
