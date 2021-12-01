import {useEffect, useState} from 'react';
import axios from 'axios';

const API='http://localhost:3000/user/';

const useGetUser=(id)=>{
    const [userInfo,setUserInfo]=useState({});

    useEffect(async()=>{
        const response=await axios.get(API+id)
        setUserInfo(response.data.body[0]);
    },[]);
    return userInfo;
};

export {useGetUser}