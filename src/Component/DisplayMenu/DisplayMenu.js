import React, { useEffect, useState } from 'react'
import {getMenu} from '../../firebase/data-firebase'

import styles from './DisplayMenu.module.css'

export const DisplayMenu = ({ orders, setOrders }) => {

    
    const [foods, setFoods] = useState();
    const [menu, setMenu] = useState('breakfast');

    const pickMenu = (i) => {
        setMenu(i);
    }

    const addToOrder = (food) => {
        console.log(food) 
        setOrders(currentOrder => [
            ...currentOrder,
            food
        ])
    }

    useEffect(() => {
        getMenu().then(res => {
            if (menu === 'breakfast') {
                const menuFoods = Object.entries(res.breakfast).map((value) => {
                    return value
                });
                setFoods(menuFoods)
            }
            if (menu === 'traditional') {
                const menuFoods = Object.entries(res.traditional).map((value) => {
                    return value
                });
                setFoods(menuFoods)
            }
        }).catch(error => console.log(error));
    }, [menu])

  return (
      <>
    <p className={styles.titleAdd}>AGREGAR PEDIDO</p>
    <div className={styles.cartContainer}>
        <div className={styles.btnMenuContainer}>
            <button onClick={
                    () => pickMenu('breakfast')
                }
                className={styles.btnMenu}>
                DESAYUNO
            </button>

            <button onClick={
                    () => pickMenu('traditional')
                }
                className={styles.btnMenu}>
                TRADITIONAL
            </button>
        </div>
        <div className={styles.btnContainer}>
            {
            foods && foods.map((food, i) => (
                <div key={i}>
                    <button className={styles.btnFood}
                        key={
                            foods[i]
                        }
                        onClick={
                            () => addToOrder(food)
                    }>
                        {
                        food[1].name
                    }</button>
                </div>
            ))
        } </div>
    </div>
    </>
  )
}
