import { useEffect, useState } from "react"
import { Message } from "./message";

export const SimpleForm = () => {
const [formState, setFormState] = useState({
    username: 'strider',
    email: 'grecox@guguru.com'
})

const {username, email} = formState;

const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
        ...formState,
        [name]: value
    })
}

useEffect(() => {
//   console.log('useEffect');

}, [])

useEffect(() => {
    // console.log('useEffect - email');
  
  }, [email])

  useEffect(() => {
    // console.log('useEffect- formState');
  
  }, [formState])


  return (
    <>
        <h2>Simple Form</h2>
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
            placeholder="example@e-mail.com"
            name="email"
            value={email}
            onChange={onInputChange}

        />
        {        
            (username === 'strider2') && <Message />
        }
        
    </>
  )
}
