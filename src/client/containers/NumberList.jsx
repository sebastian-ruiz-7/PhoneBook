import React from 'react'

import { CardNumber } from '../components/CardNumber'

const NumberList = ({numbers}) => {
    return (
        <>
            {numbers.map(number=>(
                <CardNumber number={number} key={`CardNumber ${number.number}`}/>
            ))}
        </>
    )
}

export {NumberList}
