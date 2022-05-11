import React, { useState} from 'react'

import './GetName.css'

export const GetName = () => {

    const [dataClient, setDataClient] = useState({clientName: '', orderNumber: ''});

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDataClient({
            ...dataClient,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
        <div className='nameContainer'>
        <p className='client'>Cliente</p>
            <input type='text' className='clientName' name='clientName' placeholder='NOMBRE CLIENTE'
                onChange={ handleInputChange }></input>
        </div>
        <div className='orderNumberContainer'>
        <p className='orderNumber'>Pedido</p>
        </div>
        </>
    )
}
