import axios from "axios";

const API='http://localhost:3000/number/'

const useDeleteNumber=async(data)=>{
    try {
        const token=localStorage.getItem('sessionJWT');        

        const respose=await axios.delete(API,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
            data:data
        })
    } catch (error) {
        console.log(error)
    }
    
}

export {useDeleteNumber}