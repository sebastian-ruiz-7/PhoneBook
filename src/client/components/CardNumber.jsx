//Import dependencies
import React from 'react'
//Import styles
import '@styles/CardNumber.css'
//Import state
import { AppContext } from '@context/AppContext'
//Import assets
import userIcon from '@assets/user.png'
import deleteIcon from '@assets/delete.png'
import updateIcon from '@assets/settings.png'

const CardNumber = ({number}) => {

    const {openDeleteAlert,setOpenDeleteAlert,desiredContact,setDesiredContact} =React.useContext(AppContext);

    const onDelete=(event)=>{
        event.preventDefault();
        const contact={...desiredContact}
        contact.number=number.number
        setDesiredContact(contact);
        setOpenDeleteAlert(!openDeleteAlert);
    }

    return (
        <>
            <div className='card-container'>
                <img onClick={onDelete} src={deleteIcon} alt="Delete User" className='delete-icon option-icon' />
                <img src={updateIcon} alt="Update User " className='update-icon option-icon' />
                
                    <img src={userIcon} alt="User Icon" className='user-icon' />
                    <p className='name'>{number.name}</p>
                    <p className='alias'>{number.alias}</p>
                    <p className='number'>{number.number}</p>
            </div>
        </>
    )
}

export {CardNumber}