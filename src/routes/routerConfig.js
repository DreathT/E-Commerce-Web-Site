import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/root/Dashboard";
import AddOrUpdateProduct from "../components/products/AddOrUpdateProduct";
import CartDetail from "../components/cart/CartDetail";
import NotFound from "../components/common/NotFound";

function RouterConfig() {
    return (
        <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/products" exact element={<Dashboard />} />
            <Route path="/saveproduct" exact element={<AddOrUpdateProduct />} />
            <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />}></Route>
            <Route path="/cart" exact element={<CartDetail />} />

            {/* Default routing for undefined routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterConfig;