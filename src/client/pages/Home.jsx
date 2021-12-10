//Import dependencies
import React, {useState, useEffect} from 'react'
//Import hooks
import { useGetUserByToken } from '@hooks/useGetUser'
import { useGetUserNumbers } from '@hooks/useGetUserNumbers'
//Import components
import { NumberList } from '@containers/NumberList'
import { AddNumberButton } from '@components/AddNumberButton'
import { AddNumber } from '@components/AddNumber'
import { DeleteNumber } from '@components/DeleteNumber'
//Import Portal
import { Modal } from '@pages/Modal'
import { DeleteAlert } from '@pages/DeleteAlert'
//Import Context
import { AppContext } from '@context/AppContext'
//Import Styles
import '@styles/Home.css'

const Home = () => {

    const {openModal}= React.useContext(AppContext);
    const {openDeleteAlert}= React.useContext(AppContext);


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
        <>
            <main className='home-container'>
                {!loading && (
                    <>
                        <NumberList numbers={userNumbers}/>
                        <button onClick={loggingOut}>Log Out</button>
                    </>
                )}
            </main>
            {!openDeleteAlert &&(
                <AddNumberButton />
            )}
            
            {openModal &&(
                <Modal>
                    <AddNumber />
                </Modal>
            )}

            {openDeleteAlert &&(
                <DeleteAlert>
                    <DeleteNumber />
                </DeleteAlert>
            )}
        </>
    )
}

export {Home}