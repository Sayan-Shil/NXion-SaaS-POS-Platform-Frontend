import BranchEmployee from "@/pages/branch/BranchEmployee/BranchEmployee";
import BranchLayout from "@/pages/branch/BranchLayout/BranchLayout";
import Dashboard from "@/pages/branch/Dashboard/Dashboard";
import Inventory from "@/pages/branch/Inventory/Inventory";
import Orders from "@/pages/branch/Order/Orders";
import Reports from "@/pages/branch/Reports/Reports";
import Settings from "@/pages/branch/Settings/Settings";
import Transaction from "@/pages/branch/Transaction/Transaction";
import React from "react";
import { Route, Routes } from "react-router-dom";

function BranchRoute() {
  return (
    <Routes>
      <Route path="/" element={<BranchLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="employees" element={<BranchEmployee />} />
      </Route>
    </Routes>
  );
}

export default BranchRoute;
