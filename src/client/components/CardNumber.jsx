import React from 'react'

import '@styles/CardNumber.css'

import userIcon from '@assets/user.png'
import deleteIcon from '@assets/delete.png'
import updateIcon from '@assets/settings.png'

const CardNumber = ({number}) => {
    return (
        <>
            {/* <h3>John React</h3>
            <p>3395847524</p>
            <button>Edit Contact</button>
            <button>Delete</button> */}

            <div className='card-container'>
                <img src={deleteIcon} alt="Delete User" className='delete-icon option-icon' />
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