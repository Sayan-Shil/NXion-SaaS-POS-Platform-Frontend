import { Button } from "@/components/ui/button";
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
import React from "react";
import { Link, useLocation } from "react-router";

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

const branch = {
    name: "Kolkata Sub Branch" ,
    address : "Belgharia,Kolkata-56"
}

function BranchSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full">
      <div className="flex justify-center">
        <h1 className="text-lg font-bold text-sidebar-foreground mb-6 text-center flex items-center gap-2">
       <Package className="w-7 h-7 text-primary "/> POS SYSTEM
      </h1>
      </div>

    { branch && ( <div className="mb-6 py-3 bg-sidebar-accent rounded-lg">
        <h3 className="font-medium text-sidebar-accent-foreground px-4">{branch.name}</h3>
        <p className="text-xs text-secondary-foreground/70 mt-1 px-4">{branch.address}</p>
      </div> )}

      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors
              ${
                location.pathname === item.path
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
      <div>
    
        <Button className={"w-full py-6"}><LogOut/>LogOut</Button>
      </div>
    </div>
  );
}

export default BranchSidebar;
