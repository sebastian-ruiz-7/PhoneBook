import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/DeleteAlert.css'

function DeleteAlert({children}){
    return ReactDOM.createPortal(
        <div className='deleteAlert-background'>
            {children}
        </div>,document.getElementById('deleteAlert')
    )
}

export {DeleteAlert}
