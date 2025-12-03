import CashierDashboardLayout from "@/pages/cashier/CashierDashboardLayout";
import CreateOrder from "@/pages/cashier/CreateOrder";
import CustomerLookup from "@/pages/cashier/CustomerManagement/CustomerLookup";
import CustomerInformation from "@/pages/cashier/OrderHistory/CustomerInformation";
import OrderHistory from "@/pages/cashier/OrderHistory/OrderHistory";
import RefundPage from "@/pages/cashier/Refund/RefundPage";
import ShiftSummaryPage from "@/pages/cashier/ShiftReport/ShiftSummaryPage";
import { SidebarProvider } from "@/pages/context/SidebarProvider";
import React from "react";
import { Route, Routes } from "react-router";

function CashierRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<CashierDashboardLayout />}>
          <Route index element={<CreateOrder />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="customers" element={<CustomerLookup />} />
          <Route path="return" element={<RefundPage />} />
          <Route path="shift-summary" element={<ShiftSummaryPage />} />
        </Route>
      </Routes>
    
  );
}

export default CashierRouter;
