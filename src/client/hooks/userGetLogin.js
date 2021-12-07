import axios from 'axios';

const API='http://localhost:3000/user/';

const useGetLogin=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3000/login/',data)
        localStorage.setItem('sessionJWT',response.data.body);
    } catch (error) {
        throw error.response
    }
}


export {useGetLogin}