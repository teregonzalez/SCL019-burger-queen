import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {getMenu} from '../../firebase/data-firebase'
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

    // const [dataClient, setDataClient] = useState({
    //     clientName: '',
    //     orderNumber: ''
    // });

    // const handleInputChange = (event) => {
    //     console.log(event.target.value);
    //     setDataClient({
    //         ...dataClient,
    //         [event.target.name] : event.target.value
    //     })
    // }

    // const sendData = (event) => {
    //     event.preventDefault();
    //     console.log(dataClient.clientName);
    // }
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
                    {/* <input type='text' 
                className='clientName' 
                name='clientName' 
                placeholder='NOMBRE CLIENTE'
                onChange={ handleInputChange }></input> */}
                    {/* <p className='selectTitle'>SELECCIONA MENU</p>
                <button className='btnMenuBreakfast'>DESAYUNO</button>
                <button className='btnMenuTraditional'>TRADITIONAL</button> */} </div>
                <div className='detailContainer'>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {orders && orders.map((order, i) => (
                                <tr>
                                <td className='tdFood'
                                    key={orders[i]}>
                                    {
                                    order[1].name
                                }</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <Link className="btnReturn" to='/edit'>EDITAR PEDIDO</Link>
                <Link className="btnReturn" to='/status'>ESTADO PEDIDOS</Link>
                <Link className="btnReturn" to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
