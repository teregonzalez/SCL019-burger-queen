import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import {Header} from '../Header/Header'

import './AddOrder.css'

export const AddOrder = () => {

    const [dataClient, setDataClient] = useState({
        clientName: '',
        orderNumber: ''
    });
    
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDataClient({
            ...dataClient,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(dataClient.clientName);
    }
    return (
        <>
            <Header/>
            <div className='addContainer'>
                <p className='titleAdd'>AGREGAR PEDIDO</p>
                <form className='formContainer' onSubmit={ sendData }>
                <p className='addName'>INGRESAR NOMBRE CLIENTE</p>
                <input type='text' 
                className='clientName' 
                name='clientName' 
                placeholder='NOMBRE CLIENTE'
                onChange={ handleInputChange }></input>
                <p className='selectTitle'>SELECCIONA MENU</p>
                <button className='btnMenuBreakfast'>DESAYUNO</button>
                <button className='btnMenuTraditional'>TRADITIONAL</button>
                </form>
                <Link className="btnReturn" to='/edit'>EDITAR PEDIDO</Link>
                <Link className="btnReturn" to='/status'>ESTADO PEDIDOS</Link>
                <Link className="btnReturn" to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
