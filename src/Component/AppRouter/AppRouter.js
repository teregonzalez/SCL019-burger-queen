import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Home } from "../Home/Home";
import { AddOrder } from '../AddOrder/AddOrder'
import { DetailOrder } from "../DetailOrder/DetailOrder";
import { OrderStatus } from "../OrderStatus/OrderStatus";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
              <Route path="/add" element={<AddOrder />}/>
              <Route path="/detail" element={<DetailOrder />}/>
              <Route path="/status" element={<OrderStatus />}/>
              <Route path="/" element={<Home />}/>
              <Route path="*" element={<Navigate to='/' />}/>
            </Routes>
        </Router>
      );
}
