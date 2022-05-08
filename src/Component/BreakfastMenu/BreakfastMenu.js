import React, {useEffect, useState} from 'react'
import {getMenu} from '../../firebase/data-firebase'


export const BreakfastMenu = () => {

    const [foods, setFoods] = useState();

    const getBreakfastMenu = () => {
        getMenu().then(res => {
            const menuFoods = Object.entries(res.breakfast).map((value) => {
                return value
              });
            setFoods(menuFoods)
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getBreakfastMenu()
    }, [])
    
    return (
        <div>
            <button onClick={ getBreakfastMenu }
                className="btn btn-light">
                DESAYUNO
            </button>
            { foods && foods.map((food, i) => (
                <>
                    <button key={i}>{ food[1].name }</button>
                    <p key={i}> $ { food[1].price }</p>
                </>
                ))}
        </div>
    )
}
