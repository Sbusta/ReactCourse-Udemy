import { useEffect, useState } from "react"
import { Message } from "./message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });


  return (
    <>
        <h2>Form With Custom Hook</h2>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="Example@e-mail.com"
            name="email"
            value={email}
            onChange={onInputChange}

        />

        <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}

        />
        {        
            // (username === 'strider2') && <Message />
        }
        <button className="btn btn-primary mt-2" onClick={onResetForm}> Borrar </button>
    </>
  )
}
