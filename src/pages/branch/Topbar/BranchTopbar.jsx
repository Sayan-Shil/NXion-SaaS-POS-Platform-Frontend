import { Button } from "@/components/ui/button";
import { Badge, Bell, User2Icon } from "lucide-react";
import React from "react";

const branch = {
  name: "Kolkata Sub Branch",
  address: "Belgharia,Kolkata-56",
};

const userProfile = {
  name: "Sayan Shil",
  email: "sayansil2000@gmail.com",
};

function BranchTopbar() {
  return (
    <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="font-semibold text-md">{branch ? branch.name : "Branch Dashboard"} </h1>
        <p className="font-normal text-sm">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button>
          <Bell className="w-5 h-5" />
        </Button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <User2Icon className="w-5 h-5" />
          </div>

          <div className="hidden md:block">
            <p className="text-sm text-foreground">{userProfile.name}</p>
            <p className="text-xs text-muted-foreground">{userProfile.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BranchTopbar;
