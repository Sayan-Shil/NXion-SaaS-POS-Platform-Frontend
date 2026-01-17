import BranchSidebar from "@/pages/branch/Sidebar/BranchSidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import {
    BadgeDollarSign,
  BarChart2,
  Clock,
  CreditCard,
  Download,
  FileText,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Store,
  StoreIcon,
  SubscriptIcon,
  Tag,
  Truck,
  Users,
} from "lucide-react";
import AdminTopbar from "./AdminTopbar";
import AdminSidebar from "./AdminSideBar";
const navLinks = [
  {
    name: "Dashboard",
    path: "/super-admin/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Stores",
    path: "/super-admin/stores",
    icon: <Store className="w-5 h-5" />,
  },
  
  {
    name: "Pending Request",
    path: "/super-admin/pending-request",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    name: "Subscription Plans",
    path: "/super-admin/subscription",
    icon: <BadgeDollarSign className="w-5 h-5" />,
  },
  {
    name: "Exports",
    path: "/super-admin/exports",
    icon: <Download className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/super-admin/settings",
    icon: <Settings className="w-5 h-5" />,
  },

];
function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-linear-to-br from-primary/5 via-background to-primary/5">
      <AdminSidebar navItems={navLinks} />
      <div className="flex-1 flex flex-col ">
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4 ">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
