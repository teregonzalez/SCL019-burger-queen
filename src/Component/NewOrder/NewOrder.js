import React from 'react'

import { img404 } from'../../img/img404.png';
import { Header } from '../Header/Header'

export const newOrder = () => {
  return (
    <div>
    <Header />
    <h1>EN CONSTRUCCION</h1>
    <img className="img404"
                src={ img404 }
                alt="img404"/>
    </div>
  )
}
