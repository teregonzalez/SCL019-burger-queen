import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/logo.svg'

import './Home.css'

export const Home = () => {
    return (
        <div className="homeContainer">
            <img className="logoHome"
                src={ logo }
                alt="logo"/>
            <Link className="btn" to='/add'>AGREGAR PEDIDO</Link>
            <Link className="btn" to='/edit'>EDITAR PEDIDO</Link>
            <Link className="btn" to='/status'>ESTADO PEDIDOS</Link>
        </div>
    )
}

// (
//     <NavLink className="homeContainer">
//         <img className="logo"
//             src={logo}
//             alt="logo"/>
//         <NavLink className="btn">AGREGAR PEDIDO</NavLink>
//         {/* <Link to={'/newOrder'}>AGREGAR PEDIDO</Link>
//         </Link> */}
//         <NavLink className="btn">EDITAR PEDIDO</NavLink>
//         {/* <Link to={'/editOrder'}>EDITAR PEDIDO</Link> */}
//         <NavLink className="btn">ESTADO PEDIDOS</NavLink>
//         {/* <Link to={'/orderState'}>ESTADO PEDIDOS</Link>
//         </button> */} </div>
// )
