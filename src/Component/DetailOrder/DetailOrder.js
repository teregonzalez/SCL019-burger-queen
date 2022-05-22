import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import {db} from "../../firebase/firebase-config";
import {collection, updateDoc,
    doc, onSnapshot, query} from "firebase/firestore";

import {Header} from '../Header/Header'
import styles from './DetailOrder.module.css'

export const DetailOrder = () => {

    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const ordersCollection = collection(db, "ordersCollection");
        const q = query(ordersCollection);
        const getOrders = onSnapshot(q, (snapshot) => setOrderData(snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))));
        return getOrders;
    }, []);

    const changeStatus = async (id, status) => {
        const orderDoc = doc(db, "ordersCollection", id);
        const newFields = { status: "Listo" };
        await updateDoc(orderDoc, newFields);
        console.log(newFields);
      };

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
            <p className={styles.titleAdd}>pedidos pendientes</p>
            <div className={
                styles.detailContainer
            }>
            <div className={
                styles.ordersContainer
            }>

                    {
                    orderData && orderData.map((order, i) => (
                        <div className={
                    styles.orderContainer
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
                        </div>
                        <table className={
                    styles.orderTableContainer
                } key={
                            order.id
                        }><thead>
	<tr className={styles.trHead}>
		<th className={
                    styles.categoryTitle
                }>producto</th>
		<th className={
                    styles.categoryTitle
                }>cantidad</th>
	</tr>
	</thead>
    {order.orderData.orders.map((order, i) => (
    <tbody key={
                            i
                        }>
	<tr className={styles.trBody} >
        <td className={styles.tdBody}>{order.name}</td>
        <td className={styles.tdBodyQty} >{order.qty}</td>
	</tr>
	</tbody>
    ))}
                        </table>
                        <button className={
                        styles.btnChangeStatus}
                        onClick={
                            () => changeStatus(order.id, order.status)
                    }>{checkStatus(order.status)}</button>
                        </div>

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
                    to='/status'>ESTADO PEDIDOS</Link>
                <Link className={
                        styles.btnReturn
                    }
                    to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
