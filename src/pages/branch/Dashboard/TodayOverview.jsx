import { DollarSign, Package, ShoppingBag, Users } from "lucide-react";
import React from "react";
import { getChangeType } from "./getChangeType";
import { Card, CardContent } from "@/components/ui/card";

const todayOverview = {
  totalSales: 5468,
  salesGrowth: 38,
  orderGrowth: 40,
  ordersToday: 69,
  activeCashiers: 11,
  cashierGrowth: -12,
  lowStockItems: 11,
  lowStockGrowth: 0,
};

function TodayOverview() {
  const kpis = todayOverview
  ? [
      {
        title: "Today's Sales",
        value:
          todayOverview.totalSales !== undefined
            ? `₹ ${todayOverview.totalSales.toLocaleString("en-IN")}`
            : "-",
        icon: <DollarSign className="w-8 h-8 text-primary" />,
        change:
          todayOverview.salesGrowth !== undefined
            ? `${todayOverview.salesGrowth > 0 ? "+" : ""}${todayOverview.salesGrowth.toFixed(2)}%`
            : "-",
        changeType: getChangeType(todayOverview.salesGrowth),
      },
      {
        title: "Orders Today",
        value: todayOverview.ordersToday ?? "-",
        icon: <ShoppingBag className="w-8 h-8 text-primary" />,
        change:
          todayOverview.orderGrowth !== undefined
            ? `${todayOverview.orderGrowth > 0 ? "+" : ""}${todayOverview.orderGrowth.toFixed(2)}%`
            : "-",
        changeType: getChangeType(todayOverview.orderGrowth),
      },
      {
        title: "Active Cashiers",
        value: todayOverview.activeCashiers ?? "-",
        icon: <Users className="w-8 h-8 text-primary" />,
        change:
          todayOverview.cashierGrowth !== undefined
            ? `${todayOverview.cashierGrowth > 0 ? "+" : ""}${todayOverview.cashierGrowth.toFixed(2)}%`
            : "-",
        changeType: getChangeType(todayOverview.cashierGrowth),
      },
      {
        title: "Low Stock Items",
        value: todayOverview.lowStockItems ?? "-",
        icon: <Package className="w-8 h-8 text-primary" />,
        change:
          todayOverview.lowStockGrowth !== undefined
            ? `${todayOverview.lowStockGrowth > 0 ? "+" : ""}${todayOverview.lowStockGrowth.toFixed(2)}%`
            : "-",
        changeType: getChangeType(todayOverview.lowStockGrowth),
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

export default TodayOverview;
