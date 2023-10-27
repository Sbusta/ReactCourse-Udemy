import {Link as RouterLink} from 'react-router-dom'

import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Create new account'>
      <form>
            <Grid container>
                <Grid item xs={ 12 } sx={{mt:2}}>
                    <TextField 
                      label="Name"  
                      type="text" 
                      placeholder="your name"
                      fullWidth 
                    />
                  </Grid>
                  <Grid item xs={ 12 } sx={{mt:2}}>
                    <TextField 
                      label="Email"  
                      type="email" 
                      placeholder="example@email.com"
                      fullWidth 
                    />
                  </Grid>
                  <Grid item xs={ 12 } sx={{mt:2}}>
                    <TextField 
                      label="Password"  
                      type="password" 
                      placeholder="password"
                      fullWidth 
                    />
                  </Grid>
                  <Grid container spacing={2} sx={{mb: 2, mt:1}}>
                    <Grid item xs={12}>
                      <Button variant='contained' fullWidth>
                        Create an account
                      </Button>
                    </Grid>
                    
                    <Grid container direction='row' justifyContent='end' sx={{mt:2}}>
                      <Typography sx={{mr:1}}>Already have an account? </Typography>
                      <Link component={RouterLink} fontWeight='bold' color='inherit' to="/auth/login">
                        Login here
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
          </form>
    </AuthLayout>
  )
}
