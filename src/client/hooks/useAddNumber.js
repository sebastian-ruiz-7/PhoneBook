import axios from "axios";

const API='http://localhost:3000/number/'

const useAddNumber=async(data)=>{
    try {
        const token=localStorage.getItem('sessionJWT');        

        const respose=await axios.post(API,data,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        console.log(respose);
    } catch (error) {
        console.log(error)
    }
}

export {useAddNumber}