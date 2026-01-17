import { Button } from "@/components/ui/button";
import { LogOut, Package } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar({ admin, navItems = [] }) {
  const location = useLocation();

  return (
    <div className="w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full">
      <div className="flex justify-center">
        <h1 className="text-lg font-bold text-sidebar-foreground mb-6 text-center flex items-center gap-2">
          <Package className="w-7 h-7 text-primary " /> POS SYSTEM
        </h1>
      </div>

      {admin && (
        <div className="mb-6 py-3 bg-sidebar-accent rounded-lg">
          <h3 className="font-medium text-sidebar-accent-foreground px-4">
            {admin.name}
          </h3>
          <p className="text-xs text-secondary-foreground/70 mt-1 px-4">
            {admin.address}
          </p>
        </div>
      )}

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
        <Button className={"w-full py-6"}>
          <LogOut />
          LogOut
        </Button>
      </div>
    </div>
  );
}

export default AdminSidebar;
