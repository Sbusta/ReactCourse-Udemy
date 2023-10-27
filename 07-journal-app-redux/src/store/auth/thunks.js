import { LoginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { chekingCredentials, login, logout } from "./";

export const chekingAuthentication = () =>{
    return async(dispatch) => {
        dispatch(chekingCredentials());
        
    };
};

export const startGoogleSignIn = () =>{
    return async(dispatch) => {

        dispatch(chekingCredentials());

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch(logout(result.errorMessage))
        dispatch( login(result) );
    };
};

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) =>{
    return async(dispatch) =>{
        dispatch(chekingCredentials());
        const result = await registerUserWithEmailPassword({email, password, displayName});
        if(!result.ok) return dispatch(logout(result))

        dispatch( login(result));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) =>{
        dispatch(chekingCredentials());

        const resp = await LoginWithEmailPassword({email, password});
        if(!resp.ok) return dispatch(logout( resp ));
        dispatch(login(resp))
    }

}

export const startLogout = ()=>{
    return async(dispatch) =>{
        await logoutFirebase();

        dispatch(clearNotesLogout());
        dispatch(logout());
        
    }
}