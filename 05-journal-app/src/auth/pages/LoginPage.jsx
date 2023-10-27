import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField} from "@mui/material"
import {Google} from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
        <AuthLayout title='Login'>
          <form>
            <Grid container>
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
                    <Grid item xs={12} sm={6} >
                      <Button variant='contained' fullWidth>
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <Button variant='contained' fullWidth>
                        <Google sx={{mr:1}}/>
                        Google
                      </Button>
                    </Grid>
                    <Grid container direction='row' justifyContent='end' sx={{mt:2}}>
                      <Link component={RouterLink} fontWeight='bold' color='inherit' to="/auth/register">
                        Sign Up
                      </Link>
                    </Grid>
                  </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}
