import React from 'react'

import { AppContext } from '@context/AppContext'

import '@styles/AddNumber.css'

const AddNumber = () => {

    const {openModal,setOpenModal} = React.useContext(AppContext);

    const onCancel=()=>{
        setOpenModal(!openModal)
    }

    return (
            <div className='add-num-container'>
                <p className='add-num__title'>Añade un nuevo numero</p>
                <form className='add-num__form'>
                    <label htmlFor="name" name='name' className='form__label'>Nombre</label>
                    <input type="text" placeholder='John React' className='form__input'/>
                    <label htmlFor="alias" name='alias'className='form__label'>Alias</label>
                    <input type="text" placeholder='John R' className='form__input'/>
                    <label htmlFor="number" name='number' className='form__label'>Número</label>
                    <input type="text" placeholder='3498548217' className='form__input'/>
                </form>
                <div className='buttons-container'>
                    <button className='add-num__button add-num__button--cancel' onClick={onCancel}>Cancelar</button>
                    <button className='add-num__button add-num__button--submit'>Añadir</button>
                </div>
            </div>
    )
}

export {AddNumber}
