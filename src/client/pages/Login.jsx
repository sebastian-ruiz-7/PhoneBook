import React from 'react'

const Login = () => {
    return (
        <div className='Login'>
            <form >
                <label htmlFor="email">Emaiil</label>
                <input type="email" name='email' placeholder='email@email.com' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='********' />
                <button>Log in</button>
            </form>

            <p>Forgot your password? Click here to reset!</p>
            <button>Register New Account</button>
        </div>
    )
}

export {Login}