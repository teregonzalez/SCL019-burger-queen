import React from 'react'
import {Link} from 'react-router-dom'

import {Header} from '../Header/Header'

import './AddOrder.css'

const clientName = '';

export const AddOrder = () => {
    return (
        <>
            <Header/>
            <div className='addContainer'>
                <p className='titleAdd'>AGREGAR PEDIDO</p>
                <form className='formContainer'>
                <p className='addName'>INGRESAR NOMBRE CLIENTE</p>
                <input type='text' className='clientName' value={ clientName } placeholder='NOMBRE CLIENTE'></input>
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
