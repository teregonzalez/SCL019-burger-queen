import React, {useState} 
from 'react'

// import {getTotal} from './getTotal';

import styles from './GetName.module.css'

export const GetName = ({orders, setOrders}) => {

    const [inputValue, setInputValue] = useState('');
    const orderNumber = new Date().getTime();
    // const [totalToPay, setTotalToPay] = useState()

    // const createOrder = (orders, dataClient) => {
    //     setOrders({
    //         ...orders
    //     })
    // }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        console.log(inputValue)
    }

    return (
        <div className={
            styles.getDataContainer
        }>
            <div className={
                styles.nameContainer
            }>
                <p className={
                    styles.title
                }>Cliente</p>
                <input type='text'
                    className={
                        styles.clientName
                    }
                    name='clientName'
                    placeholder='NOMBRE CLIENTE'
                    onChange={handleInputChange}></input>
                <p className={
                    styles.orderNumber
                }>Pedido:</p>
                <p className={
                    styles.orderNumber
                }>{ orderNumber }</p>
            </div>
            <div className={
                styles.orderNumberContainer
            }>
                <div className={
                    styles.totalContainer
                }></div>
                <p className={
                        styles.title
                    }>TOTAL</p>
                <p className={
                        styles.title
                    }>
                    {/* { totalToPay } */}
                    </p>
            </div>
        </div>
    )
}
