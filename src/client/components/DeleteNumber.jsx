//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useDeleteNumber } from '@hooks/useDeleteNumber'
//Import styles
import '@styles/DeleteNumber.css'

const DeleteNumber = () => {

    const {openDeleteAlert,setOpenDeleteAlert,desiredContact} =React.useContext(AppContext);

    const onCancel=(event)=>{
        event.preventDefault();
        setOpenDeleteAlert(!openDeleteAlert);
    }

    const onDelete=async(event)=>{
        try {
            event.preventDefault()
            const deleteNum=await useDeleteNumber(desiredContact)
            location.href='/home'
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div className='del-num-container'>
                <p className='del-num__title'>¿Estás seguro que quieres eliminar este contacto?</p>
                <div className='buttons-container'>
                    <button className='del-num__button del-num__button--cancel' onClick={onCancel}>Cancelar</button>
                    <button className='del-num__button del-num__button--submit' onClick={onDelete}>Eliminar</button>
                </div>
        </div>
    )
}

export {DeleteNumber}
