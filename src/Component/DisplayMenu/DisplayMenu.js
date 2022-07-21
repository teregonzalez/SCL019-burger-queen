import React, { useEffect, useState } from "react";
import { getMenu } from "../../firebase/data-firebase";

import styles from "./DisplayMenu.module.css";

export const DisplayMenu = ({ orders, setOrders }) => {
  const [foods, setFoods] = useState();
  const [menu, setMenu] = useState("breakfast");

  const pickMenu = (i) => {
    setMenu(i);
  };

  const addToOrder = (food) => {
    const exist = orders.find((order) => order.name === food.name);
    if (exist) {
      setOrders(
        orders.map((order) =>
          order.name === food.name ? { ...exist, qty: exist.qty + 1 } : order
        )
      );
    } else {
      setOrders((currentOrder) => [
        ...currentOrder,
        {
          ...food,
          qty: 1,
        },
      ]);
    }
  };

  useEffect(() => {
    getMenu()
      .then((res) => {
        if (menu === "breakfast") {
          const menuFoods = res.breakfast.map((value) => {
            return value;
          });
          setFoods(menuFoods);
        }
        if (menu === "traditional") {
          const menuFoods = res.traditional.map((value) => {
            return value;
          });
          setFoods(menuFoods);
        }
      })
      .catch((error) => console.log(error));
  }, [menu]);

  return (
    <>
      <p className={styles.titleAdd}>AGREGAR PEDIDO</p>
      <div className={styles.cartContainer}>
        <div className={styles.btnMenuContainer}>
          <button
            onClick={() => pickMenu("breakfast")}
            className={styles.btnMenu}
          >
            DESAYUNO
          </button>

          <button
            onClick={() => pickMenu("traditional")}
            className={styles.btnMenu}
          >
            TRADITIONAL
          </button>
        </div>
        <div className={styles.btnContainer}>
          {foods &&
            foods.map((food, i) => (
              <div key={i}>
                <button
                  className={styles.btnFood}
                  key={foods[i]}
                  onClick={() => addToOrder(food)}
                >
                  {food.name}
                </button>
              </div>
            ))}{" "}
        </div>
      </div>
    </>
  );
};
