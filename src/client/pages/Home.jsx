import React, {useState, useEffect} from 'react'
import { useGetUserByToken } from '@hooks/useGetUser'
import { useGetUserNumbers } from '@hooks/useGetUserNumbers'

import { NumberList } from '@containers/NumberList'
// import { Redirect } from 'react-router-dom'
// import { render } from 'react-dom'



const Home = () => {
    
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
            console.log(userNumbers)
        }

        handleUser();
    }, [])
    


    const loggingOut=(event)=>{
        event.preventDefault()
        localStorage.removeItem('sessionJWT')
        location.href='/login'
    }

    return (
        <>

            <NumberList numbers={userNumbers}/>
            <button onClick={loggingOut}>Log Out</button>
        </>
    )
}

export {Home}