import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {getMenu} from '../../firebase/data-firebase'
import {GetName} from '../GetName/GetName'
import {Header} from '../Header/Header'
import './AddOrder.css'

export const AddOrder = () => {

    const [foods, setFoods] = useState();
    const [str, setStr] = useState('breakfast');
    const [orders, setOrders] = useState([]);

    const pickMenu = (i) => {
        setStr(i);
    }

    const addToOrder = (food) => {
        setOrders((currentOrder) => [
            ...currentOrder,
            food
        ])
    }

    const deleteProduct = (product) => {
        setOrders(orders.filter(order => order !== product))
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
            <div className='addContainer'>
                <p className='titleAdd'>AGREGAR PEDIDO</p>
                <div className='cartContainer'>
                    <div className='btnMenuContainer'>
                        <button onClick={
                                () => pickMenu('breakfast')
                            }
                            className="btnMenu">
                            DESAYUNO
                        </button>

                        <button onClick={
                                () => pickMenu('traditional')
                            }
                            className="btnMenu">
                            TRADITIONAL
                        </button>
                    </div>
                    <div className='btnContainer'>
                        {
                        foods && foods.map((food, i) => (
                            <div key={i}>
                                <button className='btnFood'
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
                <div className='detailContainer'>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th></th>
                                <th>CANTIDAD</th>
                                <th>PRECIO</th>
                            </tr>
                        </thead>
                        {
                        orders && orders.map((order, i) => (
                            <tbody>
                                <tr>
                                    <td className='tdFood'
                                        key={
                                            orders[i]
                                    }>
                                        {
                                        order[1].name
                                    }</td>
                                    <td>
                                        <button className='btnDelete'
                                            onClick={
                                                () => deleteProduct(orders[i])
                                        }>X</button>
                                    </td>
                                    <td className='tdContador'>contador</td>
                                    <td className='tdPrice'
                                        key={
                                            orders[i].price
                                    }>$ {
                                        order[1].price
                                    }</td>
                                </tr>
                            </tbody>
                        ))
                    } </table>
                    <GetName/>
                </div>
                <Link className="btnReturn" to='/edit'>EDITAR PEDIDO</Link>
                <Link className="btnReturn" to='/status'>ESTADO PEDIDOS</Link>
                <Link className="btnReturn" to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
