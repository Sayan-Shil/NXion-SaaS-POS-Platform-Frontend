import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Store, Users, TrendingUp, TrendingDown } from "lucide-react";
import React from "react";

const loading = false;

const states = [
  {
    title: "Total Sales",
    value: 45,
    icon: DollarSign,
    change: 50,
    loading,
  },
  {
    title: "Total Branches",
    value: 15,
    icon: Store,
    change: -4,
    loading,
  },
  {
    title: "Total Products",
    value: 7899,
    icon: ShoppingCart,
    change: 40,
    loading,
  },
  {
    title: "Total Employees",
    value: 300,
    icon: Users,
    change: 30,
    loading,
  },
];

function DashboardState() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {states.map((state, index) => {
        const isPositive = state.change >= 0;
        const Icon = state.icon;

        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent>
              {/* Header */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {state.title}
                </p>

                <div className="p-2 rounded-full bg-violet-50">
                  <Icon className="w-6 h-6 text-violet-500" />
                </div>
              </div>

              {/* Value */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {state.value.toLocaleString()}
                </h3>
              </div>

              {/* Change */}
              <div
                className={`mt-2 flex items-center gap-1 text-sm font-medium ${
                  isPositive ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>
                  {Math.abs(state.change)}% from last month
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default DashboardState;
