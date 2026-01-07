import Branches from "@/pages/store/Branch/Branches";
import Categories from "@/pages/store/Category/Categories";
import StoreDashboard from "@/pages/store/Dashboard/StoreDashboard";
import StoreDashboardLayout from "@/pages/store/Dashboard/StoreDashboardLayout";
import StoreEmployee from "@/pages/store/Employee/StoreEmployee";
import Products from "@/pages/store/Product/Products";
import React from "react";
import { Route, Routes } from "react-router-dom";
import StoreInfo from "../pages/store/StoreInfo/StoreInfo";
import Upgrade from "@/pages/store/Upgrade/Upgrade";

function StoreRoute() {
  return (
    <Routes>
      <Route path="/" element={<StoreDashboardLayout />}>
        <Route index element={<StoreDashboard />} />
        <Route path="dashboard" element={<StoreDashboard />} />
        <Route path="branches" element={<Branches />} />
        <Route path="stores" element={<Branches />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="employees" element={<StoreEmployee />} />
        <Route path="alerts" element={<Branches />} />
        <Route path="sales" element={<Branches />} />
        <Route path="reports" element={<Branches />} />
        <Route path="upgrade" element={<Upgrade />} />
          <Route path="settings" element={<StoreInfo />} />
      </Route>
    </Routes>
  );
}

export default StoreRoute;
