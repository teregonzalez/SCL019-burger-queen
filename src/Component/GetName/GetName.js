import React, { useState} from 'react'

import styles from './GetName.module.css'

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
        <div className={styles.nameContainer}>
        <p className={styles.client}>Cliente</p>
            <input type='text' className={styles.clientName} name='clientName' placeholder='NOMBRE CLIENTE'
                onChange={ handleInputChange }></input>
        </div>
        <div className={styles.orderNumberContainer}>
        <p className={styles.orderNumber}>Pedido</p>
        </div>
        </>
    )
}
