import React, {useState} 
from 'react'
import { db } from "../../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import styles from './GetOrder.module.css'

export const GetOrder = ({orders, setOrders}) => {

    const [name, setName] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [orderData, setOrderData] = useState({});

    if(orderNumber === '') {
        setOrderNumber(new Date().getTime())
    }

    const totalOrder = orders.reduce((acumulador, valorActual) => acumulador + valorActual.price * valorActual.qty, 0 );

    const handleInputChange = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const createOrderData = async() => {
        if(name.length < 3){
           alert("Ingresa nombre");
           return
        } 
        setOrderData({
            orders: orders,
            name: name,
            total: totalOrder,
            orderNumber: orderNumber,
            status: 'pendiente'
        })
        console.log(orderData);

        try {
            const docRef = await addDoc(collection(db, "ordersCollection"), {
                orderData
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
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
                    onChange={handleInputChange}/>
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
                            () => createOrderData()
                    }>INGRESAR PEDIDO</button>
                </div>
            </div>
        </div>
    )
}
