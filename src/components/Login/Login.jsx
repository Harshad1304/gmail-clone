import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const signIn = ()=>{
        signInWithPopup(auth, provider)
        .then(({user})=>{
            console.log(user)
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl: user.photoURL,
            }))
        }).catch(error =>alert(error))
    }
  return (
    <div className='login'>
        <div className="login-container">
            <img  src="https://freelogopng.com/images/all_img/1657952217google-logo-png.png" alt="" />
            <Button className='login-btn' variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>

       
    </div>
  )
}

export default Login