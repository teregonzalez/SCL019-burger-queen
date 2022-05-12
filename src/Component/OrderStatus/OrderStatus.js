import React from 'react'
import {Link} from 'react-router-dom'

import img404 from '../../img/img404.png';
import {Header} from '../Header/Header'
import styles from './OrderStatus.module.css'

export const OrderStatus = () => {
    return (
        <>
            <Header/>
            <div className={styles.statsContainer}>
                <h1>ESTATUS DE ORDENES EN CONSTRUCCION</h1>
                <img className={styles.img404}
                    src={img404}
                    alt="img404"/>
                <Link className={styles.btnReturn} to='/add'>AGREGAR PEDIDO</Link>
                <Link className={styles.btnReturn} to='/edit'>EDITAR PEDIDO</Link>
                <Link className={styles.btnReturn} to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
