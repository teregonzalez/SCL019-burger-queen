import React from 'react'

import  logo from '../../img/logo.svg'
import './Header.css'
export const Header = () => {
  return (
    <div className='headerContainer'>
    <img className='logo' src={ logo } alt="logo" />
    </div>
  )
}
