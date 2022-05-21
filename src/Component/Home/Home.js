import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'

import styles from './Home.module.css'

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <img className={styles.logoHome}
                src={ logo }
                alt="logo"/>
            <Link className={styles.btnRoute} to='/add'>AGREGAR PEDIDO</Link>
            <Link className={styles.btnRoute} to='/detail'>DETALLE PEDIDOS</Link>
            <Link className={styles.btnRoute} to='/status'>ESTADO PEDIDOS</Link>
        </div>
    )
}