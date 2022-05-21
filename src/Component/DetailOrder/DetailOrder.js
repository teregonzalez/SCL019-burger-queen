import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import {db} from "../../firebase/firebase-config";
import {collection, onSnapshot, query, orderBy} from "firebase/firestore";

import {Header} from '../Header/Header'
import styles from './DetailOrder.module.css'

export const DetailOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ordersCollection = collection(db, "ordersCollection");
        const q = query(ordersCollection, orderBy("date", "desc"));
        const getOrders = onSnapshot(q, (snapshot) => 
        setOrders(snapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id})))
        );
        console.log(orders)
        return getOrders;
    }, []);

    return (
        <>
            <Header/>
            <div className={
                styles.detailContainer
            }>
                <h1>pedidos</h1>
                <div className={
                    styles.orderHeader
                }>
                {
                    orders &&  orders.map((order) => (
                <li key={order.id}>{order.name}</li>
                ))
            }
                </div>
                <Link className={
                        styles.btnReturn
                    }
                    to='/add'>AGREGAR PEDIDO</Link>
                <Link className={
                        styles.btnReturn
                    }
                    to='/status'>DETALLES PEDIDOS</Link>
                <Link className={
                        styles.btnReturn
                    }
                    to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
