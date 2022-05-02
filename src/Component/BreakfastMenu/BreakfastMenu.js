import React from 'react'
import { getMenu } from '../../firebase/data-firebase'


export const BreakfastMenu = () => {

  const getBreakfastMenu = () => {
    getMenu()
    .then(res => console.log(res.breakfast))
    .catch(error => console.log(error));
  }

  return (
    <div>
    <button onClick={ getBreakfastMenu } className="btn btn-light"> DESAYUNO </button>
    </div>
  )
}
