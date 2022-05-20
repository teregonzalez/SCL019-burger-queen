import React, {useState} 
from 'react'

import styles from './GetName.module.css'

export const GetName = ({orders, setOrders}) => {

    const [name, setName] = useState('');
    const [orderNumber, setOrderNumber] = useState('');

    if(orderNumber === '') {
        setOrderNumber(new Date().getTime())
    }

    const totalOrder = orders.reduce((acumulador, valorActual) => acumulador + valorActual.price * valorActual.qty, 0 )

    const handleInputChange = (event) => {
        setName(event.target.value)
        console.log(name)
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
                    value={ name }
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
                }>
                <p className={
                        styles.title
                    }>TOTAL</p>
                <p className={
                        styles.totalToPay
                    }>$
                    { totalOrder }
                    </p>
                <button className={
                        styles.btnOrder}
                        onClick={
                            () => console.log(orders)
                    }>INGRESAR PEDIDO</button>
                </div>
            </div>
        </div>
    )
}
