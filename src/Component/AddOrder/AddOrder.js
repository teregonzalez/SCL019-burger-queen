import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {GetName} from '../GetName/GetName'
import {Header} from '../Header/Header'
import {ProductTable} from '../ProductTable/ProductTable'
import {DisplayMenu} from '../DisplayMenu/DisplayMenu'

import styles from './AddOrder.module.css'

export const AddOrder = () => {

    const [orders, setOrders] = useState([]);

    return (
        <>
            <Header/>
            <div className={
                styles.addContainer
            }>
                <DisplayMenu orders={orders}
                    setOrders={setOrders}/>
                <div className={
                    styles.detailContainer
                }>
                    <ProductTable orders={orders}
                        setOrders={setOrders}/>
                    <GetName orders={orders}
                        setOrders={setOrders}/>
                </div>
                <Link className={
                        styles.btnReturn
                    }
                    to='/edit'>EDITAR PEDIDO</Link>
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
