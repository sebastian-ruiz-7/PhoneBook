import React from 'react'

const useInitialState = () => {
    const [openModal,setOpenModal]=React.useState(false);

    return{
        openModal,setOpenModal
    }
}

export {useInitialState}
