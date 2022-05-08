import React from 'react';
import {Link} from 'react-router-dom'

import img404 from '../../img/img404.png';
import {Header} from '../Header/Header'
import './EditOrder.css'

export const EditOrder = () => {
    return (
        <>
            <Header/>
            <div className='editContainer'>
                <h1>EDITOR DE ORDENES EN CONSTRUCCION</h1>
                <img className="img404"
                    src={img404}
                    alt="img404"/>
                <Link className="btnReturn" to='/add'>AGREGAR PEDIDO</Link>
                <Link className="btnReturn" to='/status'>ESTADO PEDIDOS</Link>
                <Link className="btnReturn" to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
