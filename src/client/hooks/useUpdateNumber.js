import axios from "axios";

const API='http://localhost:3000/number/'

const useUpdateNumber=async(data)=>{
    try {
        const token=localStorage.getItem('sessionJWT');        

        const respose=await axios.put(API,data,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        })
    } catch (error) {
        console.log(error)
        
    }
    
}

export {useUpdateNumber}