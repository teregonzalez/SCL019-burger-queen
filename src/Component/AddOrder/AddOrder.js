import React from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../Header/Header'
import img404 from '../../img/img404.png';
import './AddOrder.css'

export const AddOrder = () => {
    return (
      <>
      <Header />
        <div className='addContainer'>
            <h1>AGREGA TU ORDEN EN CONSTRUCCION</h1>
            <img className="img404"
                src={img404}
                alt="img404"/>
            <Link className="btnReturn" to='/edit'>EDITAR PEDIDO</Link>
            <Link className="btnReturn" to='/status'>ESTADO PEDIDOS</Link>
            <Link className="btnReturn" to='/'>VOLVER A HOME</Link>
        </div>
      </>
    )
}
