import React from 'react'
import { Link } from 'react-router-dom'

import {Header} from '../Header/Header'
import img404 from '../../img/img404.png';
import './AddOrder.css'

export const AddOrder = () => {
    return (
        <div className='addContainer'>
            <Header/>
            <h1>AGREGA TU ORDEN EN CONSTRUCCION</h1>
            <img className="img404"
                src={img404}
                alt="img404"/>
            <Link className="btn" to='/'>VOLVER A HOME</Link>
        </div>
    )
}
