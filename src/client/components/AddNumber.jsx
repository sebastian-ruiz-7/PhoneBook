import React from 'react'

import { useAddNumber } from '@hooks/useAddNumber'

import { AppContext } from '@context/AppContext'

import '@styles/AddNumber.css'

const AddNumber = () => {

    const form=React.useRef(null);

    const [newNumberForm,setNewNumberForm]=React.useState({name:null,alias:null,number:null})

    const {openModal,setOpenModal} = React.useContext(AppContext);

    const onCancel=()=>{
        setOpenModal(!openModal)
    }

    const onSubmit=async(event,data)=>{
        try {
            event.preventDefault();
            const addNumber=await useAddNumber(data);
            setOpenModal(!openModal);
            location.href='/home'
        } catch (error) {
            console.log(error)
        }

        
    }
   
    const onChange=(event,element)=>{
        if (element=='name') {
            const name=event.target.value;
            setNewNumberForm({name:name,alias:newNumberForm.alias,number:newNumberForm.number})
        } else if (element=='alias') {
            const alias=event.target.value;
            setNewNumberForm({name:newNumberForm.name,alias:alias,number:newNumberForm.number})
        } else if (element=='number') {
            const number=event.target.value;
            setNewNumberForm({name:newNumberForm.name,alias:newNumberForm.alias,number:number})
        }
    }

    return (
            <div className='add-num-container'>
                <p className='add-num__title'>Añade un nuevo numero</p>
                <form ref={form} className='add-num__form'>
                    <label htmlFor='name' className='form__label'>Nombre</label>
                    <input type="text" onChange={()=>onChange(event,'name')} placeholder='John React' className='form__input'/>
                    <label htmlFor='alias' name='alias'className='form__label'>Alias</label>
                    <input type="text" onChange={()=>onChange(event,'alias')} placeholder='John R' className='form__input'/>
                    <label htmlFor='number' name='number' className='form__label'>Número</label>
                    <input type="text" onChange={()=>onChange(event,'number')} placeholder='3498548217' className='form__input'/>
                </form>
                <div className='buttons-container'>
                    <button className='add-num__button add-num__button--cancel' onClick={onCancel}>Cancelar</button>
                    <button className='add-num__button add-num__button--submit' onClick={()=>onSubmit(event,newNumberForm)}>Añadir</button>
                </div>
            </div>
    )
}

export {AddNumber}
