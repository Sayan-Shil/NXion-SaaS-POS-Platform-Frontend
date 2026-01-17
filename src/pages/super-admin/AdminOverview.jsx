import { Ban, Blocks, Delete, OctagonAlert, ShoppingBag, Store, Users } from "lucide-react";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const Overview = {
  totalStores: 89,
  pendingStores: 38,
  activeStores: 40,
  blockedStores: 69,
};

function AdminOverview() {
  const kpis = Overview
  ? [
      {
        title: "Total Store",
        value:
          Overview.totalStores !== undefined
            ? ` ${Overview.totalStores.toLocaleString("en-IN")}`
            : "-",
        icon: <Store className="w-8 h-8 text-primary" />,
      },
      {
        title: "Pending Store",
        value: Overview.pendingStores ?? "-",
        icon: <OctagonAlert className="w-8 h-8 text-primary" />,
      },
      {
        title: "Active Store",
        value: Overview.activeStores ?? "-",
        icon: <Users className="w-8 h-8 text-primary" />,
    
      },
      {
        title: "Blocked Store",
        value: Overview.blockedStores ?? "-",
        icon: <Ban className="w-8 h-8 text-primary" />,
      },
    ]
  : [];



  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <Card key={kpi.title}>
          <CardContent className={"p-6"}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{kpi.title}</p>

                <h3  className="font-bold text-xl tracking-tighter">{kpi.value}</h3>
                <p
                  className={`text-xs font-medium mt-1 ${
                    kpi.changeType == "positive"
                      ? "text-green-500"
                      : kpi.changeType == "negative"
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  {kpi.change}
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                {kpi.icon}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AdminOverview;
