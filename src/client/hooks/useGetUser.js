import { useState } from 'react';
import axios from 'axios';

const APIBYID='http://localhost:3000/user/';
const APIBYTOKEN='http://localhost:3000/user/me/token'

const useGetUserById=async(id)=>{
    const [userInfo,setUserInfo]=useState({});

    const response=await axios.get(APIBYID+id)
    setUserInfo(response.data.body[0]);

    return userInfo;        
};

const useGetUserByToken=async()=>{
    try {
        const token=localStorage.getItem('sessionJWT');

        const response=await axios.get(APIBYTOKEN,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        const userInfo=response.data.body[0];
        return userInfo;

    } catch (error) {
        console.error(error);
    }


    
}

export {useGetUserById,useGetUserByToken}