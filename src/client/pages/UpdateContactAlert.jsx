import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/UpdateContactAlert.css'

function UpdateContactAlert({children}){
    return ReactDOM.createPortal(
        <div className='updateContact-background'>
            {children}
        </div>,document.getElementById('updateContact')
    )
}

export {UpdateContactAlert} 