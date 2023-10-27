import { useMemo, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailAndPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value)=>value.includes('@'), 'Type a valid email.'],
  password: [(value)=>value.length >=6, 'The password must be at least six characters long or more.'],
  displayName: [(value)=>value.length >= 1, 'The name is mandatory.']

}
export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state=> state.auth);
  const isChekingAuthentication = useMemo(()=> status === 'cheking', [status]);

  const {
    formState, displayName ,email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);
  
  const onSubmit = (event) =>{
    event.preventDefault();
    setFormSubmitted(true)

    if (!isFormValid)return;

    console.log(formState)

    dispatch(startCreatingUserWithEmailAndPassword(formState));
  }
  
  return (
    <AuthLayout title='Create new account'>
      <form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs={ 12 } sx={{mt:2}}>
                    <TextField 
                      label="Name"  
                      type="text" 
                      placeholder="your name"
                      fullWidth
                      name='displayName' 
                      value={displayName}
                      onChange={onInputChange}
                      error={!!displayNameValid  && formSubmitted}
                      helperText={displayNameValid }
                    />
                  </Grid>
                  <Grid item xs={ 12 } sx={{mt:2}}>
                    <TextField 
                      label="Email"  
                      type="email" 
                      placeholder="example@email.com"
                      fullWidth 
                      name='email' 
                      value={email}
                      onChange={onInputChange}
                      error={!!emailValid && formSubmitted}
                      helperText={emailValid }
                    />
                  </Grid>
                  <Grid item xs={ 12 } sx={{mt:2}}>
                    <TextField 
                      label="Password"  
                      type="password" 
                      placeholder="password"
                      fullWidth 
                      name='password' 
                      value={password}
                      onChange={onInputChange}
                      error={!!passwordValid  && formSubmitted}
                      helperText={passwordValid }
                    />
                  </Grid>
                  <Grid container spacing={2} sx={{mb: 2, mt:1}}>
                  <Grid item 
                      xs={12}
                      display={!!errorMessage ? '':'none'}
                  >
                      <Alert severity='error'>  {errorMessage}</Alert>
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                      disabled={isChekingAuthentication}
                        type='submit'
                        variant='contained' 
                        fullWidth
                      >
                        Create an account
                      </Button>
                    </Grid>
                  </Grid>
                    
                    <Grid container direction='row' justifyContent='end' sx={{mt:2}}>
                      <Typography sx={{mr:1}}>Already have an account? </Typography>
                      <Link component={RouterLink} fontWeight='bold' color='inherit' to="/auth/login">
                        Login here
                      </Link>
                    </Grid>
                  
                </Grid>
          </form>
    </AuthLayout>
  )
}
