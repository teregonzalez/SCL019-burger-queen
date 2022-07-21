import React from "react";
import { MdDeleteForever } from "react-icons/md";

import styles from "./ProductTable.module.css";

export const ProductTable = ({ orders, setOrders }) => {
  let total = (price, qty) => price * qty;

  const deleteProduct = (product) => {
    setOrders(orders.filter((order, index) => index !== product));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>PRODUCTO</th>
          <th></th>
          <th>CANTIDAD</th>
          <th>PRECIO</th>
        </tr>
      </thead>
      {orders &&
        orders.map((order, i) => (
          <tbody key={i}>
            <tr>
              <td className={styles.tdFood}>{order.name}</td>
              <td>
                <button
                  className={styles.btnDelete}
                  onClick={() => deleteProduct(i)}
                >
                  <MdDeleteForever />
                </button>
              </td>
              <td className={styles.tdContador}>{order.qty}</td>
              <td className={styles.tdPrice}>
                $ {total(order.price, order.qty)}
              </td>
            </tr>
          </tbody>
        ))}
    </table>
  );
};
