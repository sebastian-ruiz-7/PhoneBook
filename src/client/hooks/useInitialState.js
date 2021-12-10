import React from 'react'

const useInitialState = () => {
    const [openModal,setOpenModal]=React.useState(false);

    const [openDeleteAlert,setOpenDeleteAlert]=React.useState(false);

    const [desiredContact,setDesiredContact]=React.useState({
        name:null,
        alias:null,
        newNumber:null,
        oldNumber:null
    })

    return{
        openModal,setOpenModal,openDeleteAlert,setOpenDeleteAlert,desiredContact,setDesiredContact
    }
}

export {useInitialState}
