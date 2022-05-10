import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {getMenu} from '../../firebase/data-firebase'
import {Header} from '../Header/Header'

import './AddOrder.css'

export const AddOrder = () => {

    const [foods, setFoods] = useState();
    const [str, setStr] = useState('breakfast');

    const toggleMenu = (i) => {
        setStr(i);
    }

    useEffect(() => {
        getMenu().then(res => {
            if(str === 'breakfast'){
                const menuFoods = Object.entries(res.breakfast).map((value) => {
                    return value
                  });
                  setFoods(menuFoods)
            } if(str === 'traditional'){
                const menuFoods = Object.entries(res.traditional).map((value) => {
                    return value
                  });
                  setFoods(menuFoods)
            }
        }).catch(error => console.log(error));
    }, [str])

    // const [dataClient, setDataClient] = useState({
    //     clientName: '',
    //     orderNumber: ''
    // });
    
    // const handleInputChange = (event) => {
    //     console.log(event.target.value);
    //     setDataClient({
    //         ...dataClient,
    //         [event.target.name] : event.target.value
    //     })
    // }

    // const sendData = (event) => {
    //     event.preventDefault();
    //     console.log(dataClient.clientName);
    // }
    return (
        <>
            <Header/>
            <div className='addContainer'>
                <p className='titleAdd'>AGREGAR PEDIDO</p>
                <div className='cartContainer'>
                <div className='btnMenuContainer'>
            <button onClick={ () => toggleMenu( 'breakfast' ) }
                className="btnMenu">
                DESAYUNO
            </button>

            <button onClick={ () => toggleMenu( 'traditional' ) }
                className="btnMenu">
                TRADITIONAL
            </button>
                </div>
            { foods && foods.map((food, i) => (
                <>
                    <button key={i}>{ food[1].name }</button>
                </>
                ))}
                {/* <input type='text' 
                className='clientName' 
                name='clientName' 
                placeholder='NOMBRE CLIENTE'
                onChange={ handleInputChange }></input> */}
                {/* <p className='selectTitle'>SELECCIONA MENU</p>
                <button className='btnMenuBreakfast'>DESAYUNO</button>
                <button className='btnMenuTraditional'>TRADITIONAL</button> */}
                </div>
                <Link className="btnReturn" to='/edit'>EDITAR PEDIDO</Link>
                <Link className="btnReturn" to='/status'>ESTADO PEDIDOS</Link>
                <Link className="btnReturn" to='/'>VOLVER A HOME</Link>
            </div>
        </>
    )
}
