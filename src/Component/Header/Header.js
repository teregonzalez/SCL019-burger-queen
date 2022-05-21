import React from 'react'

import  logo from '../../img/logo.png'
import styles from './Header.module.css'
export const Header = () => {
  return (
    <div className={styles.headerContainer}>
    <img className={styles.logo} src={ logo } alt="logo" />
    </div>
  )
}
