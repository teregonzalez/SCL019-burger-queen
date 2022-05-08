import React from 'react'
import {Link} from 'react-router-dom'

import img404 from '../../img/img404.png';
import {Header} from '../Header/Header'
import './OrderStatus.css'

export const OrderStatus = () => {
    return (
        <>
            <Header/>
            <div className='statsContainer'>
                <h1>ESTATUS DE ORDENES EN CONSTRUCCION</h1>
                <img className="img404"
                    src={img404}
                    alt="img404"/>
                <Link className="btnReturn" to='/add'>AGREGAR PEDIDO</Link>
                <Link className="btnReturn" to='/edit'>EDITAR PEDIDO</Link>
                <Link className="btnReturn" to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
