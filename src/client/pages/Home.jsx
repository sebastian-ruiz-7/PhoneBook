import React, {useState, useEffect} from 'react'
import { useGetUserByToken } from '@hooks/useGetUser'
import { useGetUserNumbers } from '@hooks/useGetUserNumbers'

import { NumberList } from '@containers/NumberList'
// import { Redirect } from 'react-router-dom'
// import { render } from 'react-dom'

import '@styles/Home.css'

const Home = () => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState({name:null,email:null})
    const [userNumbers,setUserNumbers]=useState([])

    if (!localStorage.getItem('sessionJWT')) {
        location.href='/login'
    }

    useEffect(() => {
        const handleUser=async()=>{
            const userInfo=await useGetUserByToken();
            const userNumbers=await useGetUserNumbers();
            setUserNumbers(userNumbers);
            setUser(userInfo)
            setLoading(false);
        }

        handleUser();
    }, [])
    


    const loggingOut=(event)=>{
        event.preventDefault()
        localStorage.removeItem('sessionJWT')
        location.href='/login'
    }

    return (
        <main className='home-container'>
            {!loading && (
                <>
                    <NumberList numbers={userNumbers}/>
                    <button onClick={loggingOut}>Log Out</button>
                </>
            )}
        </main>
    )
}

export {Home}