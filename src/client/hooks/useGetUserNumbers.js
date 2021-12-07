import axios from "axios"

const API='http://localhost:3000/number/'

const useGetUserNumbers=async()=>{
    try {
        const token=localStorage.getItem('sessionJWT');
        const response=await axios.get(API,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        const userNumbers=response.data.body[0].numbers
        return userNumbers
    } catch (error) {
        console.log(error)
    }
}

export {useGetUserNumbers}