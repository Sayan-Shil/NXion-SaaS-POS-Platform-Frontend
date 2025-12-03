import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Clock, ReceiptIcon, RotateCcw, ShoppingCart } from "lucide-react";
import { Outlet } from "react-router";
import { UseSidebar } from "../context/hooks/UseSidebar";
import { SidebarProvider } from "../context/SidebarProvider";

const navItems = [
  {
    path: "/cashier",
    icon: <ShoppingCart size={20} />,
    label: "POS SYSTEM",
  },
  {
    path: "/cashier/orders",
    icon: <Clock size={20} />,
    label: "Order History",
  },
  {
    path: "/cashier/return",
    icon: <RotateCcw size={20} />,
    label: "Returns/Refunds",
  },
  {
    path: "/cashier/shift-summary",
    icon: <ReceiptIcon size={20} />,
    label: "Shift Summary",
  },
];

function LayoutContent() {
  const { sideBarOpen, setSideBarOpen } = UseSidebar();

  return (
    <div className="flex h-screen bg-background">
      {sideBarOpen && <div className="flex inset-0 bg-black/40"></div>}

      <div
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-white 
    transition-transform duration-300 
    ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <Sidebar navItems={navItems} onClose={() => setSideBarOpen(false)} />
      </div>
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

function CashierDashboardLayout() {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
}

export default CashierDashboardLayout;
