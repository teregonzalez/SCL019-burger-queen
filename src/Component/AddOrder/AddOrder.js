import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GetOrder } from "../GetOrder/GetOrder";
import { Header } from "../Header/Header";
import { ProductTable } from "../ProductTable/ProductTable";
import { DisplayMenu } from "../DisplayMenu/DisplayMenu";

import styles from "./AddOrder.module.css";

export const AddOrder = () => {
  const [orders, setOrders] = useState([]);

  return (
    <>
      <Header />
      <div className={styles.addContainer}>
        <DisplayMenu orders={orders} setOrders={setOrders} />
        <div className={styles.detailContainer}>
          <ProductTable orders={orders} setOrders={setOrders} />
          <GetOrder orders={orders} setOrders={setOrders} />
        </div>
        <Link className={styles.btnReturn} to="/detail">
          detalle pedidos
        </Link>
        <Link className={styles.btnReturn} to="/status">
          estado pedidos
        </Link>
        <Link className={styles.btnReturn} to="/">
          volver a home
        </Link>
      </div>
    </>
  );
};
