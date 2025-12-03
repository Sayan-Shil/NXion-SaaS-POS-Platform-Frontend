import { Button } from "@/components/ui/button";
import { Cross, CrossIcon, X } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function Sidebar({ navItems, onClose }) {
  return (
    <div className="w-64 border-r border-border bg-sidebar  p-4 flex flex-col h-full relative">
      <div className="flex items-center justify-between">
        <h1 className="text-sl font-bold text-sidebar-foreground">
          POS SYSTEM
        </h1>
        <Button
          variant="outline"
          size="icon"
          onClick={onClose}
          className="rounded-full border-2 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-400 transition"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-2">
        {navItems.map((item)=>(
            <Link onClick={()=>{if(onClose) onClose()}} className={`flex items-center  justify-between rounded-md hover:bg-sidebar-accent transition-colors ${location.pathname===item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground" }`} key={item.path} to={item.path}>
            
            <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
            </div>
            
            </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
