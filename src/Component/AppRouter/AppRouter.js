import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Home } from "../Home/Home";
import { AddOrder } from '../AddOrder/AddOrder'
import { EditOrder } from "../EditOrder/EditOrder";
import { OrderStatus } from "../OrderStatus/OrderStatus";

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <div>
            <Routes>
              <Route path="/add" element={<AddOrder />}/>
              <Route path="/edit" element={<EditOrder />}/>
              <Route path="/status" element={<OrderStatus />}/>
              <Route path="/" element={<Home />}/>
              <Route path="*" element={<Navigate to='/' />}/>
            </Routes>
              </div>

          </div>

        </Router>
      );
}
