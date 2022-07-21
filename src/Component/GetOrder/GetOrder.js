import React, { useState } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import styles from "./GetOrder.module.css";

export const GetOrder = ({ orders, setOrders }) => {
  const [name, setName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  if (orderNumber === "") {
    setOrderNumber(new Date().getTime());
  }

  const totalOrder = orders.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.price * valorActual.qty,
    0
  );

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const createOrderData = async () => {
    if (name.length < 3) {
      alert("Ingresa nombre");
    }
    if (orders.length < 1) {
      alert("Ingresa producto");
    }
    const orderData = {
      orders: orders,
      name: name,
      total: totalOrder,
      orderNumber: orderNumber,
      date: Timestamp.fromDate(new Date()),
    };
    console.log(orderData);

    try {
      const docRef = await addDoc(collection(db, "ordersCollection"), {
        orderData,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setOrders([]);
    setName("");
    setOrderNumber("");
    return;
  };

  return (
    <div className={styles.getDataContainer}>
      <div className={styles.nameContainer}>
        <p className={styles.title}>Cliente</p>
        <input
          type="text"
          className={styles.clientName}
          name="clientName"
          placeholder="NOMBRE CLIENTE"
          value={name}
          onChange={handleInputChange}
        ></input>
        <p className={styles.orderNumber}>Pedido:</p>
        <p className={styles.orderNumber}>{orderNumber}</p>
      </div>
      <div className={styles.orderNumberContainer}>
        <div className={styles.totalContainer}>
          <p className={styles.title}>TOTAL</p>
          <p className={styles.totalToPay}>${totalOrder}</p>
          <button className={styles.btnOrder} onClick={() => createOrderData()}>
            INGRESAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
};
