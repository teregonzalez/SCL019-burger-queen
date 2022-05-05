import React, {useEffect, useState} from 'react'
import {getMenu} from '../../firebase/data-firebase'


export const BreakfastMenu = () => {

    const [foods, setFoods] = useState()

    const getBreakfastMenu = () => {
        getMenu().then(res => {
            const menuFoods = Object.keys(res.breakfast);
            setFoods(menuFoods)
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getBreakfastMenu()
    }, [])
    return (
        <div>
            <button onClick={getBreakfastMenu}
                className="btn btn-light">
                DESAYUNO
            </button>
            {foods && foods.map((food, i) => (
                    <button key={i}>{ food }</button>
                ))}
        </div>
    )
}
