//Import dependencies
import React from 'react'
//Import context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useUpdateNumber } from '@hooks/useUpdateNumber';
//Import styles
import '@styles/UpdateContact.css';

const UpdateContact = () => {

    const form=React.useRef(null);
    const {desiredContact,setDesiredContact,openUpdateAlert,setOpenUpdateAlert} = React.useContext(AppContext);


    const onCancel=()=>{
        setOpenUpdateAlert(!openUpdateAlert)
    }

    const onSubmit=async(event)=>{
        try {
            event.preventDefault()
            const updateNumber=await useUpdateNumber(desiredContact);
            setOpenUpdateAlert(!openUpdateAlert);
            location.href='/home'
        } catch (error) {
            console.error(error);
        }
    }

    const onChange=(event,element)=>{
        if (element=='name') {
            const name=event.target.value;
            const contact={...desiredContact}
            contact.name=name;
            setDesiredContact(contact);
            //setDesiredContact({name:name,alias:newNumberForm.alias,number:newNumberForm.number})
        } else if (element=='alias') {
            const alias=event.target.value;
            const contact={...desiredContact}
            contact.alias=alias;
            setDesiredContact(contact);
            //setNewNumberForm({name:newNumberForm.name,alias:alias,number:newNumberForm.number})
        } else if (element=='number') {
            const number=event.target.value;
            const contact={...desiredContact}
            contact.newNumber=number;
            setDesiredContact(contact);
            //setNewNumberForm({name:newNumberForm.name,alias:newNumberForm.alias,number:number})
        }
    }

    return (
        <div className='update-num-container'>
                <p className='update-num__title'>¿Estás seguro que quieres actulizar este contacto?</p>
                <form ref={form} className='update-num__form'>
                    <label htmlFor='name' className='form__label'>Nombre</label>
                    <input type="text" onChange={()=>onChange(event,'name')} placeholder='John React' className='form__input'/>
                    <label htmlFor='alias' name='alias'className='form__label'>Alias</label>
                    <input type="text" onChange={()=>onChange(event,'alias')} placeholder='John R' className='form__input'/>
                    <label htmlFor='number' name='number' className='form__label'>Número</label>
                    <input type="text" onChange={()=>onChange(event,'number')} placeholder='3498548217' className='form__input'/>
                </form>
                <div className='buttons-container'>
                    <button className='update-num__button update-num__button--cancel' onClick={onCancel}>Cancelar</button>
                    <button className='update-num__button update-num__button--submit' onClick={onSubmit}>Actualizar</button>
                </div>
            </div>
    )
}

export {UpdateContact}
