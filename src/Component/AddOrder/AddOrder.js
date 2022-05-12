import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {getMenu} from '../../firebase/data-firebase'
import {GetName} from '../GetName/GetName'
import {Header} from '../Header/Header'
import styles from './AddOrder.module.css'

export const AddOrder = () => {

    const [foods, setFoods] = useState();
    const [str, setStr] = useState('breakfast');
    const [orders, setOrders] = useState([]);

    const pickMenu = (i) => {
        setStr(i);
    }

    const addToOrder = (food) => {
        setOrders(currentOrder => [
            ...currentOrder,
            food
        ])
    }

    const deleteProduct = (product) => {
        setOrders(orders.filter((order, index) => index !== product))
    }

    useEffect(() => {
        getMenu().then(res => {
            if (str === 'breakfast') {
                const menuFoods = Object.entries(res.breakfast).map((value) => {
                    return value
                });
                setFoods(menuFoods)
            }
            if (str === 'traditional') {
                const menuFoods = Object.entries(res.traditional).map((value) => {
                    return value
                });
                setFoods(menuFoods)
            }
        }).catch(error => console.log(error));
    }, [str])


    return (
        <>
            <Header/>
            <div className={styles.addContainer}>
                <p className={styles.titleAdd}>AGREGAR PEDIDO</p>
                <div className={styles.cartContainer}>
                    <div className={styles.btnMenuContainer}>
                        <button onClick={
                                () => pickMenu('breakfast')
                            }
                            className={styles.btnMenu}>
                            DESAYUNO
                        </button>

                        <button onClick={
                                () => pickMenu('traditional')
                            }
                            className={styles.btnMenu}>
                            TRADITIONAL
                        </button>
                    </div>
                    <div className={styles.btnContainer}>
                        {
                        foods && foods.map((food, i) => (
                            <div key={i}>
                                <button className={styles.btnFood}
                                    key={
                                        foods[i]
                                    }
                                    onClick={
                                        () => addToOrder(food)
                                }>
                                    {
                                    food[1].name
                                }</button>
                            </div>
                        ))
                    } </div>
                </div>
                <div className={styles.detailContainer}>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th></th>
                                <th>CANTIDAD</th>
                                <th>PRECIO</th>
                            </tr>
                        </thead>
                        {orders && orders.map((order, i) => (
                            <tbody key={i}>
                                <tr>
                                    <td className={styles.tdFood}>{order[1].name}</td>
                                    <td><button className={styles.btnDelete}
                                            onClick={() => deleteProduct(i)
                                        }>X</button></td>
                                    <td className={styles.tdContador}>contador</td>
                                    <td className={styles.tdPrice}>$ {order[1].price}</td>
                                </tr>
                            </tbody>
                        ))
                    }</table>
                    <GetName/>
                </div>
                <Link className={styles.btnReturn} to='/edit'>EDITAR PEDIDO</Link>
                <Link className={styles.btnReturn} to='/status'>ESTADO PEDIDOS</Link>
                <Link className={styles.btnReturn} to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
