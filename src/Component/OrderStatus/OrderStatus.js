
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import {db} from "../../firebase/firebase-config";
import {collection, onSnapshot, query} from "firebase/firestore";
import {Header} from '../Header/Header'
import styles from './OrderStatus.module.css'

export const OrderStatus = () => {

    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const ordersCollection = collection(db, "ordersCollection");
        const q = query(ordersCollection);
        const getOrders = onSnapshot(q, (snapshot) => setOrderData(snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))));
        return getOrders;
    }, []);

    const checkStatus = (status) => {
        if (!status){
            return 'Pendiente'}
            else {
                return status
            }
      }
    return (
        <>
            <Header/>
            <p className={styles.titleAdd}>estado de ordenes</p>
            <div className={styles.statusContainer}>
            <div className={styles.statusOrdersContainer}>

{
                    orderData && orderData.map((order, i) => (
                        <div className={
                    styles.orderStatusContainer
                } key={
                    order.id
                        }>
                        <div className={
                    styles.orderDetailContainer
                }>
                        <p className={styles.pStyle}>N° {
                            order.orderData.orderNumber
                        }</p>
                        <p className={styles.pStyle}>{
                            order.orderData.name
                        }</p>
                        <button className={styles.btnStatusStyle}>{
                            checkStatus(order.status)
                        }</button>
                        </div>
                        </div>
                    ))
}
</div>
                <Link className={styles.btnReturn} to='/add'>AGREGAR PEDIDO</Link>
                <Link className={styles.btnReturn} to='/detail'>DETALLE PEDIDO</Link>
                <Link className={styles.btnReturn} to='/'>VOLVER A HOME</Link>
                </div>
        </>
    )
}
