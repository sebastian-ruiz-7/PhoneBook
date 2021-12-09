import React from 'react'
import '@styles/AddNumberButton.css';

import { AppContext } from '@context/AppContext';


const AddNumberButton = () => {
    const {openModal,setOpenModal} =React.useContext(AppContext);

    const clickToAddANumber=(event)=>{
        event.preventDefault()
        setOpenModal(!openModal)
    }

    return (
        <>
            <button onClick={clickToAddANumber} className='add-number'>+</button>
        </>
    )
}

export {AddNumberButton}
