import React, { Children } from 'react'
import {
  CreditCardIcon,
  FileTextIcon,
  LayoutDashboard,
  LogOut,
  Package,
  Package2,
  Settings2,
  ShoppingBag,
  UserCircleIcon,
  Users2,
} from "lucide-react";
import BranchSidebar from '../Sidebar/BranchSidebar'
import BranchTopbar from '../Topbar/BranchTopbar'
import { Outlet } from 'react-router-dom'
const branch = {
    name: "Kolkata Sub Branch" ,
    address : "Belgharia,Kolkata-56"
}
const navItems = [
  { name: "Dashboard", path: "/branch/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Orders", path: "/branch/orders", icon: <ShoppingBag className="w-5 h-5" /> },
  { name: "Transactions", path: "/branch/transactions", icon: <CreditCardIcon className="w-5 h-5" /> },
  { name: "Inventory", path: "/branch/inventory", icon: <Package className="w-5 h-5" /> },
  { name: "Employees", path: "/branch/employees", icon: <Users2 className="w-5 h-5" /> },
  { name: "Customers", path: "/branch/customers", icon: <UserCircleIcon className="w-5 h-5" /> },
  { name: "Reports", path: "/branch/reports", icon: <FileTextIcon className="w-5 h-5" /> },
  { name: "Settings", path: "/branch/settings", icon: <Settings2 className="w-5 h-5" /> },
];
function BranchLayout({children}) {
  return (
    <div className='flex h-screen bg-linear-to-br from-primary/5 via-background to-primary/5'>
        <BranchSidebar branch={branch} navItems={navItems}/>
        <div className='flex-1 flex flex-col '>
            <BranchTopbar/>
            <main className='flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4 '>
                {children || <Outlet/>}
            </main>
        </div>
    </div>
  )
}

export default BranchLayout