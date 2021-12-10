import React from 'react';

import { useGetLogin } from '@hooks/userGetLogin';
import { useGetUser } from '@hooks/useGetUser';
//import axios from 'axios';

import '@styles/Login.css'

const Login = () => {

    const [badLogin,setBadLogin]=React.useState(false);

    const form=React.useRef(null);

    if (localStorage.getItem('sessionJWT')) {
        location.href='/home'
    }
    
    const handleSubmit=async(event)=>{
        try {
            event.preventDefault();
            const formData=new FormData(form.current);
    
            const data={
                email:formData.get('email'),
                password:formData.get('password')
            };        
            
            const response=await useGetLogin(data);
            const token=localStorage.getItem('sessionJWT')
            if (token) {
                location.href='/home'
            }
        } catch (error) {
            setBadLogin(error.data);
            console.log(error.data)
        }
    }

    const goingToNewUser=(event)=>{
        event.preventDefault();
        location.href='/new-user'
    }

    return (
        <div className='login-grid-container'>
            <div className='login-container'>
                <form ref={form} className='form-container'>
                    <label className='login__label' htmlFor="email"     >Email</label>
                    <input className='login__input' type="email"        name='email' placeholder='example@email.com' />
                    <label className='login__label' htmlFor="password"  >Password</label>
                    <input className='login__input' type="password"     name='password' placeholder='********' />
                    {badLogin.error && <p className='error-login-message'>{`${badLogin.error}`}</p>}
                    <button onClick={handleSubmit} className='element-hover login__button'>Log in</button>
                </form>
                <p className='forgot-password-p element-hover'>Forgot your password? Click here to reset!</p>
                <button className='new-user-button element-hover' onClick={goingToNewUser}>Register New Account</button>
            </div>  
        </div>

    )
}

export {Login}